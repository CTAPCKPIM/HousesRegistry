//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import './HouseRegistry.sol';
import '@openzeppelin/contracts/token/ERC20/IERC20.sol';
import './token/IHouseNFT.sol';

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
    function listHouseSimple(uint256 _costETH, 
        uint256 _costDAI, 
        uint256 _squareHouse, 
        string memory _addressHouse
    ) public {
        //address _seller = msg.sender;
        require(_timeCheck(), 'After 24 hours');
        _listHouse(_costETH, _costDAI, _squareHouse, msg.sender, _addressHouse);
        _timeSum();
    }
    
    ///@dev this function accepts ETH to buy a NFT house, and transferred ETH to the seller
    function buyNFTHouseWithETH(uint256 _idHouse) public payable {
        require(addressHouseToken[_idHouse] != address(0), 'Does not exist');
        //address _seller = HouseNFT(addressHouseToken[_idHouse]).getSeller();
        //uint256 _value = HouseNFT(addressHouseToken[_idHouse]).getCostETH();
        payable(HouseNFT(addressHouseToken[_idHouse]).getSeller()).transfer(
            HouseNFT(addressHouseToken[_idHouse]).getCostETH());
        IHouseNFT(addressHouseToken[_idHouse]).transferFrom(
            HouseNFT(addressHouseToken[_idHouse]).getSeller(), 
            msg.sender, 
            _idHouse);
        HouseNFT(addressHouseToken[_idHouse]).setBuyer(msg.sender);
    }

    
    ///@dev this function accepts DAI to buy a house, and transferred DAI to the seller
    ///@dev using an interface for token 'FakeDAI'
    function buyHouseWithDAI(uint256 _idHouse) public payable {
        require(addressHouseToken[_idHouse] != address(0), 'Does not exist');
        //address _seller = HouseNFT(addressHouseToken[_idHouse]).getSeller();
        //uint256 _value = HouseNFT(addressHouseToken[_idHouse]).getCostDAI();
        IERC20(tokenAddr).transferFrom(
            msg.sender, 
            HouseNFT(addressHouseToken[_idHouse]).getSeller(),
            HouseNFT(addressHouseToken[_idHouse]).getCostDAI());
        HouseNFT(addressHouseToken[_idHouse]).setBuyer(msg.sender);
    }
}