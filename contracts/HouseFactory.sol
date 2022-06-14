//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

///@author by CTAPCKPIM
///@title Registry of houses(factory)
import './token/HouseNFT.sol';
import './IHouseFactory.sol';

contract HouseFactory {
    address public addrTokenHouse;

    mapping (uint256 => address) public houses;

    ///@dev creating a house-token
    function createHouse(
        uint256 _idHouse,
        uint256 _costETH,
        uint256 _costDAI,
        uint256 _squareHouse,
        address _seller,
        string memory _addressHouse
    ) public {
        HouseNFT houseNFT = new HouseNFT(
            _idHouse,
            _costETH,
            _costDAI,
            _squareHouse,
            _seller,
            _addressHouse
        );
        addrTokenHouse = address(houseNFT);
        houses[_idHouse] = addrTokenHouse;
    }

    ///@dev return the address of token-contract
    function getAddrToken() external view returns (address) {
        return addrTokenHouse;
    }
}
