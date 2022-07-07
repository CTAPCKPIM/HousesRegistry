//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import './token/HouseNFT.sol';
import './IHouseFactory.sol';

/**
 * @author by CTAPCKPIM
 * @title Registry of houses(factory)
 */
contract HouseFactory {
    /**
     * @dev the last address create for the token contract
     */
    address public addrTokenHouse;

    /**
     * @dev the array of addresses of the token contracts
     */
    address[] public houses;

    /**
     * @dev creating a house-token
     * 
     * - Creating a new token-house (NFT)
     * - The return address of token-house
     */
    function createHouse(
        uint256 _idHouse,
        uint256 _costETH,
        uint256 _costDAI,
        uint256 _squareHouse,
        address _seller,
        string memory _addressHouse
    ) public returns (address) {
        HouseNFT houseNFT = new HouseNFT(
            _idHouse,
            _costETH,
            _costDAI,
            _squareHouse,
            _seller,
            _addressHouse
        );
        houses.push(address(houseNFT));
        addrTokenHouse = address(houseNFT);
        return addrTokenHouse;
    }
}
