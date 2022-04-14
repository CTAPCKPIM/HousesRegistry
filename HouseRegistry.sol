//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

///@author by CTAPCKPIM
///@title Registry of houses
contract HouseRegistry {

    ///@dev to display in an outer functions
    event NewHouse(uint256 id, address seller, uint256 cost, string addrHouse);

    ///@dev variable for helping the generation ID
    uint256 internal idNumber = 99999;

    ///@dev struct for save of new houses
    struct House {
        uint256 idHouse;
        uint256 costHouse;
        uint256 squareHouse;
        address seller;
        string addressHouse;
    }

    ///@dev mapping to save all new houses
    mapping (uint256 => House) public houses;
    ///@dev mapping to preserves exist the ID of houses
    mapping (uint256 => bool) private existId; 

    ///@param 'randId' creates a new ID for the house 
    ///@dev function for append new houses
    ///@dev return ID 
    function listHouse(uint256 _costHouse, uint256 _squareHouse, address _seller, string memory _addressHouse) public returns(uint256) {
        require(_costHouse > 0, "ERROR: Price not can bee '0'");
        require(_squareHouse > 0, "ERROR: Square can not be '0'");
        uint256 randId = uint256(keccak256(abi.encodePacked(_seller, _squareHouse, _addressHouse))) % idNumber;
        require(existId[randId] == false, "ERROR: This ID already exists");
        existId[randId] = true;
        houses[randId] = House(randId, _costHouse, _squareHouse, _seller, _addressHouse);
        emit NewHouse(randId, _seller, _costHouse, _addressHouse);
        return randId;
    } 
}

