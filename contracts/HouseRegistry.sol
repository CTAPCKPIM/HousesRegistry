//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

///@author by CTAPCKPIM
///@title Registry of houses
import './token/IHouseNFT.sol';
import './IHouseFactory.sol';
import '@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol';

contract HouseRegistry is Initializable {
    ///@dev to display in an outer functions
    event NewHouse(uint256 id, address seller, uint256 costETH, uint256 costDAI, string addrHouse);
    ///@dev to display in an outer functions
    event NewTokenAddress(address addr);
    ///@dev to display in an outer functions
    event NewFactAddress(address addr);
    ///@dev to display in an outer functions
    event DelistHouse(string message);

    ///@dev the variable for helping the generation ID
    uint256 internal idNumber;
    ///@dev the setting time of pause
    uint256 internal readiness;
    ///@dev setting the address of token contract
    address internal tokenAddr;
    ///@dev setting the address of factory contract
    address internal factAddr;
    ///@dev the address of owner
    address internal owner;

    ///@dev setting the owner
    function initialize() public initializer {
        owner = msg.sender;
        idNumber = 99999;
        readiness = 1 days;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, 'You no the owner');
        _;
    }

    ///@dev array of ID
    uint256[] public houseIndex;

    ///@dev mapping to save all address new token-contracts
    ///@dev all address of token-contracts
    mapping(uint256 => address) public addressHouseToken;

    ///@dev mapping to save time of recharge
    mapping(address => uint256) public timerRecharge;

    ///@param 'randId' creates a new ID for the house
    ///@dev function for create new NFT house (token-contract)
    ///@dev return to the external interface 'ID' 'seller' 'price' 'addr house(street)'
    ///@dev return ID     IHouseNFT houseNFT =
    function listHouse(
        uint256 _costETH,
        uint256 _costDAI,
        uint256 _squareHouse,
        address _seller,
        string memory _addressHouse
    ) public returns (uint256) {
        require(_costETH > 0 || _squareHouse > 0, 'Price, square not can bee "0"');
        uint256 randId = _genIdHouse(_squareHouse, _seller, _addressHouse);
        require(addressHouseToken[randId] == address(0), 'This ID already exists');
        IHouseFactory(factAddr).createHouse(
            randId,
            _costETH,
            _costDAI,
            _squareHouse,
            _seller,
            _addressHouse
        );
        addressHouseToken[randId] = IHouseFactory(factAddr).getAddrToken();
        houseIndex.push(randId);
        emit NewHouse(randId, _seller, _costETH, _costDAI, _addressHouse);
        return randId;
    }

    ///@dev generation the ID for house
    function _genIdHouse(
        uint256 _squareHouse,
        address _seller,
        string memory _addressHouse
    ) internal view returns (uint256) {
        uint256 randId = uint256(
            keccak256(abi.encodePacked(_squareHouse, _seller, _addressHouse))
        ) % idNumber;
        return randId;
    }

    ///@dev setting not activity house in register
    function delistHouse(uint256 _idHouse) public onlyOwner returns (string memory) {
        IHouseNFT(addressHouseToken[_idHouse]).setBool();
        string memory message = 'Successfully';
        emit DelistHouse(message);
        return message;
    }

    ///@dev setting the address of token
    function setAddrToken(address _tokenAddr) public onlyOwner {
        tokenAddr = _tokenAddr;
        emit NewTokenAddress(tokenAddr);
    }

    ///@dev setting the address of factory
    function setAddrFact(address _factAddr) public onlyOwner {
        factAddr = _factAddr;
        emit NewFactAddress(factAddr);
    }
}
