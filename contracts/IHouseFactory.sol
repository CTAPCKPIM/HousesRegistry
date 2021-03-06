//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

/**
 * @author by CTAPCKPIM
 * @title Registry of houses(IHouseFactory)
 */

interface IHouseFactory {
    /**
     * @dev creating a house-token
     * 
     * - Interface passes values from 'HouseRegistryExtVer2.sol' to 'HouseFactory.sol'
     */
    function createHouse(
        uint256 _idHouse,
        uint256 _costETH,
        uint256 _costDAI,
        uint256 _squareHouse,
        address _seller,
        string memory _addressHouse
    ) external returns (address);
}
