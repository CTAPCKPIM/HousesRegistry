//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "./HouseRegistry.sol";

///@author by CTAPCKPIM
///@title Simple registry of houses

contract HouseRegistryExt is HouseRegistry {

    ///@dev the setting value of time
    ///@dev now + 1 days = timer
    function _timeSum() internal {
        timer = block.timestamp + readiness;
    }

    ///@dev return true or false
    ///@dev 'timer' should return 'true' 
    function _timeCheck() internal view returns(bool) {
        return timer <= block.timestamp;
    }

    ///@dev this function is a simple registry of houses
    ///@dev '_temeCheck' == 'true', all normal
    ///@dev after add new house, restarting function '_timeSum' 
    function listHouseSimple(uint256 _costETH, uint256 _costDAI, uint256 _squareHouse, string memory _addressHouse) public {
        address _seller = msg.sender;
        require(_timeCheck(), "ERROR: Adding a house will be available in 24 hours");
        _listHouse(_costETH, _costDAI, _squareHouse, _seller, _addressHouse);
        _timeSum();
    }

    ///@dev this function accepts ETH to buy a house, and transferred ETH to the seller
    ///@dev '_seller' == seller from the struct who sells the house(search by house ID)
    function buyHouseWithETH(uint256 _idHouse) public payable {
        require(houses[_idHouse].seller != address(0), "ERROR: This house doesn't exists");
        address _seller = houses[_idHouse].seller;
        uint256 _value = houses[_idHouse].costETH;
        require(_value == houses[_idHouse].costETH, "ERROR: insufficient funds(ETH)");
        payable(_seller).transfer(_value);
        houses[_idHouse].buyer = msg.sender;

    }

    ///@dev this function accepts DAI to buy a house, and transferred DAI to the seller
    ///@dev '_seller' == seller from the struct who sells the house(search by house ID)
    ///@dev using an interface for token 'FakeDAI'
    function buyHouseWithDAI(uint256 _idHouse) public payable {
        require(houses[_idHouse].seller != address(0), "ERROR: This house doesn't exists");
        address _seller = houses[_idHouse].seller;
        uint256 _value = houses[_idHouse].costDAI;
        require(_value == houses[_idHouse].costDAI, "ERROR: insufficient funds(DAI)");
        TokenIntarface(tokenAddr).transferFrom(msg.sender, _seller, _value);
        houses[_idHouse].buyer = msg.sender;
    }
}