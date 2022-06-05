//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import './HouseRegistry.sol';
import './token/IHouseNFT.sol';
import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";

///@author by CTAPCKPIM
///@title Simple registry of houses
contract HouseRegistryExtVer2 is HouseRegistry {

    ///@dev if 24 hours is out
    modifier recharge() {
        require(timerRecharge[msg.sender] <= block.timestamp, 'After 24 hours');
        _;
    }

    ///@dev this function is a simple registry of houses
    ///@dev the setting result of 'now' + '1 days'
    ///@dev using modifier 'recharge'
    function listHouseSimple(
        uint256 _costETH,
        uint256 _costDAI,
        uint256 _squareHouse,
        string memory _addressHouse
    ) public recharge {
        listHouse(_costETH, _costDAI, _squareHouse, msg.sender, _addressHouse);
        timerRecharge[msg.sender] = block.timestamp + readiness;
    }

    ///@dev this function accepts ETH to buy a NFT house, and transferred ETH to the seller
    function buyNFTHouseWithETH(uint256 _idHouse) public payable {
        require(addressHouseToken[_idHouse] != address(0), 'Does not exist');
        payable(HouseNFT(addressHouseToken[_idHouse]).seller()).transfer(
            HouseNFT(addressHouseToken[_idHouse]).costETH()
        );
        HouseNFT(addressHouseToken[_idHouse]).setBuyer(msg.sender);
    }

    ///@dev this function accepts DAI to buy a house, and transferred DAI to the seller
    ///@dev using an interface for token 'FakeDAI'
    function buyNFTHouseWithDAI(uint256 _idHouse) public payable {
        require(addressHouseToken[_idHouse] != address(0), 'Does not exist');
        require(tokenAddr != address(0), 'Token address not set'); 
        IERC20Upgradeable(tokenAddr).transferFrom(
            msg.sender,
            HouseNFT(addressHouseToken[_idHouse]).seller(),
            HouseNFT(addressHouseToken[_idHouse]).costDAI()
        );
        HouseNFT(addressHouseToken[_idHouse]).setBuyer(msg.sender);
    }
    
    ///@dev returns the ID of the most expensive house
    function getExpensiveHouseIds() public view returns(uint256) {
        uint256 count = 0;
        uint256 expensive = 0;
        uint256 randId;
        for(uint i = 0; i <= houseIndex.length; i ++) {
            if(HouseNFT(addressHouseToken[houseIndex[i]]).costDAI() >= expensive){
                expensive = HouseNFT(addressHouseToken[houseIndex[i]]).costDAI();
                randId = HouseNFT(addressHouseToken[houseIndex[i]]).idHouse();
                count ++;
            }
            count ++;
        }
        return randId;
    }
}
