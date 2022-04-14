//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "./HousesRegistry.sol";

///@author by CTAPCKPIM
///@title Simple registry of houses
contract HouseRegistryExt is HouseRegistry {

    ///@dev this function is a simple registry of houses
    function listHouseSimple(uint256 _costHouse, uint256 _squareHouse, string memory _addressHouse) public {
        address _seller = msg.sender;
        listHouse(_costHouse, _squareHouse, _seller, _addressHouse);
    }
}