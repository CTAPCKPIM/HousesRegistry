//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import './HouseRegistry.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './token/IHouseNFT.sol';

///@author by CTAPCKPIM
///@title Simple registry of houses
contract HouseRegistryExt is HouseRegistry {

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
        IERC20(tokenAddr).transferFrom(
            msg.sender,
            HouseNFT(addressHouseToken[_idHouse]).seller(),
            HouseNFT(addressHouseToken[_idHouse]).costDAI()
        );
        HouseNFT(addressHouseToken[_idHouse]).setBuyer(msg.sender);
    }
}
