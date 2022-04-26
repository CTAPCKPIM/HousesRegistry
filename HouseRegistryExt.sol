//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "./HousesRegistry.sol";

///@author by CTAPCKPIM
///@title Simple registry of houses
contract HouseRegistryExt is HouseRegistry {
    
    ///@dev the setting value of time
    function _timeSum() internal {
        timer = block.timestamp + readiness;
    }

    ///@dev return true or false 
    function _timeCheck() internal view returns(bool) {
        return timer <= block.timestamp;
    }

    ///@dev this function is a simple registry of houses
    function listHouseSimple(uint256 _costHouse, uint256 _squareHouse, string memory _addressHouse) public {
        address _seller = msg.sender;
        require(_timeCheck(), "ERROR: Adding a house will be available in 24 hours");
        _listHouse(_costHouse, _squareHouse, _seller, _addressHouse);
        _timeSum();
    }
}