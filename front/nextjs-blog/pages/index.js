import React, { Component } from 'react';
import { ethers } from 'ethers';
import { ConnectWallet } from '../components/ConnectWallet';

/**
 * @dev Address and ABI of House Registry ExtVer2
 */
import contractAddress from '../contracts/HouseRegistryExtVer2Contract-address.json';
import contractArtifact from '../contracts/HouseRegistryExtVer2.json';

/**
 * @dev Address and ABI of Token DAI
 */
import contarctAddressDAI from '../contracts/TokenContract-address.json';
import contractArtifactDAI from '../contracts/Token.json';

/**
 * @dev address and ABI of House Factory
*/
import contarctAddressFactory from '../contracts/HouseFactoryContract-address.json';
import contractArtifactFactory from '../contracts/HouseFactory.json';

/**
 *  @dev Checking the correct selected network(Rinkeby)  
 */
const RINKEBY_NETWORK_ID = '4';

export default class extends Component {
  constructor(props) {
    super(props);

    /**
     * @dev All variables for using 
     */
    this.initialState = {
      selectedAccount: null,
      txBeingSent: null,
      networkError: null,
      transactionError: null,
      balance: null,
      addressDAI: null,
      addressFact: null,
      addressNFT: null
    };

    this.state = this.initialState;
  }

  /**
   * @dev Function for connect with Metamask
   * 
   * - Check has  metamask
   * - Check and return account from metamask 
   */  
  _connectWallet = async () => {
    if(window.ethereum === undefined) {
      this.setState({
        networkError: "Install Meta Mask"
      });
      return
    }

    const [selectedAddress] = await window.ethereum.request({
      method: 'eth_requestAccounts'
    });

    if(!this._checkNetwork()) { return }

    this._initialize(selectedAddress);

    window.ethereum.on('accountsChanged', ([newAddress]) => {
      if(newAddress === undefined) {
        return this._resetState()
      }

      this._initialize(newAddress);
    });

    window.ethereum.on('chainChanged', ([networcId]) => {
      this._resetState();
    });
  }

  /**
   * @dev Initializing the main page with all elements
   * 
   * - Connects provider (Metamask)
   * - Connects smart contract
   */
  async _initialize(selectedAddress) {
    this._provider = new ethers.providers.Web3Provider(window.ethereum);

    this._houseReg = new ethers.Contract(
      contractAddress.HouseRegistryExtVer2,
      contractArtifact.abi,
      this._provider.getSigner(0)
    );

    const addrToken = this._houseReg.tokenAddr().toString();
    const addrFact = this._houseReg.factAddr().toString();

    this.setState({
      selectedAccount: selectedAddress,
      addressDAI: addrToken,
      addressFact: addrFact
      
    }, async () => {
        await this._updataBalance(),
        await this._updataDAIAddress(),
        await this._updataFactAddress()
    });
  }

  /**
   * @dev The function return balance of the account
   */
  async _updataBalance() {
    const newBalance = (await this._provider.getBalance(
      this.state.selectedAccount
    )).toString();

    this.setState({
      balance: newBalance
    });
  }
  
  /**
   * @dev The function return address of the fake DAI token(ERC20)
   */
  _updataDAIAddress = async ()=> {
    const _addrToken = (await this._houseReg.tokenAddr()).toString();
    
    this.setState({
      addressDAI: _addrToken
    }); 
  }

  /**
   * @dev The function set address of the fake DAI token(ERC20)
   */
  _setDAIAddress = async ()=> {
    await this._houseReg.setAddrToken(contarctAddressDAI.Token);
  }

  /**
   * @dev The function return address of the 'Factory house'
   */
  _updataFactAddress = async ()=> {
    const _addrFact = (await this._houseReg.factAddr()).toString();
    
    this.setState({
      addressFact: _addrFact
    }); 
  }

  /**
   * @dev The function set address of the 'Factory house'
   */
  _setFactAddress = async ()=> {
    await this._houseReg.setAddrFact(contarctAddressFactory.HouseFactory);
  }

  /**
   * @dev The function of creating a new house
   * 
   * - eth, dai, area, phyAddress - <input/> in FE
   */
  _createHouse = async ()=> {
    const eth = document.querySelector('._eth').value;
    const dai = document.querySelector('._dai').value;
    const area = document.querySelector('._area').value;
    const phyAddress = document.querySelector('._phyAddress').value;
    await this._houseReg.listHouseSimple(eth, dai, area, phyAddress);
  }

  /**
   * @dev The function search address of house-token(NFT), using ID
   * 
   * - AddressHouseToken it`s mapping(uint256 => address) 
   */
  _updataId = async ()=> {
    const _idHouse = document.querySelector('._id').value;
    const addrNFT = await (this._houseReg.addressHouseToken(_idHouse));//(this.state.idHouse));
    //console.log(_idHouse);

    this.setState({
      addressNFT: addrNFT 
    });
  }

  /**
   * @dev Resetting state of 'this.initialState' 
   */
  _resetState() {
    this.setState(this.initialState);
  }

  /**
   * @dev Checking connecting network
   */
  _checkNetwork() {
    if(window.ethereum.networkVersion === RINKEBY_NETWORK_ID) {return true}

    this.setState({
      networkError: 'Connect to: Rinkeby'
    });

    return false
  }

  /**
   * @dev Resetting the error message 
   */
  _dismissNetworkError = () => {
    this.setState({
      networkError: null
    })
  } 

  /**
   * @dev The function render all elements on a page 
   */
  render() {
    if(!this.state.selectedAccount) {
      return <ConnectWallet
        connectWallet={this._connectWallet}
        networkError={this.state.networkError}
        dismiss={this._dismissNetworkError}
      />
    }

    return(
      <>
      {this.state.selectedAccount &&
        <p>Account: {ethers.utils.getAddress(this.state.selectedAccount)}</p>
      }
      {this.state.balance &&
        <p>ETH: {ethers.utils.formatEther(this.state.balance)} ETH</p>
      }
      {this.state.addressDAI &&
        <p>DAI token: {this.state.addressDAI}</p>
      }
      <button type='button' onClick={this._setDAIAddress}>
        Set DAI address
      </button>
      {this.state.addressFact &&
        <p>Factory token: {this.state.addressFact}</p>
      }
      <button type='button' onClick={this._setFactAddress}>
        Set factory address
      </button>
      <p> =============================== </p>
      <p> Price in ETH: </p>
      <input 
        type="number" 
        className="_eth" 
        name="eth" 
        size="20" 
        maxLength="25" 
        placeholder="ETH.." 
        value={this.eth}
        onChange={this._changeInput}
      />
      <p> Price in DAI: </p>
      <input 
        type="number" 
        className="_dai" 
        name="dai" 
        size="20" 
        maxLength="25" 
        placeholder="DAI.."
      />
      <p> Area of the house: </p>
      <input 
        type="number" 
        className="_area" 
        name="area" 
        size="20" 
        maxLength="25" 
        placeholder="Area.."
      />
      <p> Physical address: </p>
      <input
        type="text" 
        className="_phyAddress" 
        name="phyAddress" 
        size="20" 
        maxLength="25" 
        placeholder="Address.."
      />
      <button type='button' onClick={this._createHouse}>
        Create house
      </button>
      <p> =============================== </p>
      <p> Address of token-house </p>
      <input 
        type="number" 
        className="_id" 
        name="ID" 
        size="20" 
        maxLength="25" 
        placeholder="Search.."
      />
      <button type='button' onClick={this._updataId}>
        Search address
      </button>
      {this.state.addressNFT &&
        <p>Address: {this.state.addressNFT}</p>
      }
      </>
    ) 
  }
}