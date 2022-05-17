//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

///@author by CTAPCKPIM
///@title Registry of houses

import "./@openzeppelin/contracts/access/Ownable.sol";

interface TokenIntarface{
   function transferFrom(address _from, address _to, uint256 _value) external returns (bool success); 
}

contract HouseRegistry is Ownable{

    TokenIntarface tokenDAI = TokenIntarface(tokenAddr);

    ///@dev to display in an outer functions
    event NewHouse(uint256 id, address seller, uint256 costETH, uint256 costDAI, string addrHouse);

    ///@dev the variable for helping the generation ID
    uint256 internal idNumber = 99999;
    ///@dev the setting time of pause
    uint256 internal readiness = 1 seconds;//1 days;
    ///@dev the variable for setting of time
    uint256 internal timer;
    //@dev setting the address of token contract
    address internal tokenAddr;

    ///@dev struct for save of new houses
    struct House {
        uint256 idHouse; 
        uint256 costETH;
        uint256 costDAI;
        uint256 squareHouse;
        address seller;
        address buyer;
        string addressHouse;
        bool exist;
    }

    ///@dev mapping to save all new houses
    ///@dev all houses search for 'ID' houses[ID]...
    mapping (uint256 => House) public houses;

    ///@param 'randId' creates a new ID for the house 
    ///@dev function for append new houses
    ///@dev return to the external interface 'ID' 'seller' 'price' 'addr house(street)'
    ///@dev return ID 
    function _listHouse(uint256 _costETH, uint256 _costDAI, uint256 _squareHouse, address _seller, string memory _addressHouse) internal returns(uint256) {
        require(_costETH > 0, "ERROR: Price not can bee '0'");
        require(_squareHouse > 0, "ERROR: Square can not be '0'");
        uint256 randId = uint256(keccak256(abi.encodePacked(_seller, _squareHouse, _addressHouse))) % idNumber;
        require(houses[randId].seller == address(0), "ERROR: This ID already exists");
        houses[randId] = House(randId, _costETH, _costDAI, _squareHouse, _seller, address(0), _addressHouse, true);
        emit NewHouse(randId, _seller, _costETH, _costDAI, _addressHouse);
        return randId;
    } 
    
    ///@dev setting not activity house in register
    function delistHouse(uint256 _id) public onlyOwner {
        houses[_id].exist = false;
    }

    ///@dev setting the address of token
    function setAddrToken(address _tokenAddr) public onlyOwner {
        tokenAddr = _tokenAddr;
    }

    /*
    function getCheapHouseIds(uint256 _maxCost) public view returns(uint256[] memory) {
       
    }*/

}
