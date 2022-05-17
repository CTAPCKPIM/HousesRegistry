//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "./ERC721.sol";
import "./IHouseNFT.sol";


///@author by CTAPCKPIM
///@title token-contract 'House NFT'

///@dev inherit from ERC721 smart contract
contract HouseNFT is IHouseNFT, ERC721{
    ///@dev information about House-token
    uint256 idHouse; 
    uint256  costETH;
    uint256  costDAI;
    uint256  squareHouse;
    address  seller;
    address  buyer;
    address  addressContract; 
    string  addressHouse;
    bool  exist;

    constructor(uint256 randId, 
        uint256 _costETH, 
        uint256 _costDAI, 
        uint256 _squareHouse, 
        address _seller, 
        string memory _addressHouse
    ) ERC721("HouseToken", "HT") {
        idHouse = randId;
        costETH = _costETH;
        costDAI = _costDAI;
        squareHouse = _squareHouse;
        seller = _seller;
        buyer = address(0);
        addressContract = address(this);
        addressHouse = _addressHouse;
        exist = true;

    }

    ///@dev getting the ID of house
    function getId() external override view returns(uint256) {
        return idHouse;
    }

    ///@dev get the price in ETH 
    function getCostETH() external override view returns(uint256) {
        return costETH;
    }

    ///@dev get the price in DAI
    function getCostDAI() external override view returns(uint256) {
        return costDAI;
    }

    ///@dev get the address of seller
    function getSeller() external override view returns(address) {
        return seller;
    }

    ///@dev setting the address of buyer
    function setBuyer(address _buyer) external override {
        buyer = _buyer;
    }

    ///@dev setting the address of buyer
    function setSeller(address _seller) external override {
        seller = _seller;
    }

    ///@dev setting the value 'false' for turning off the house from the register
    function setBool() external override {
        exist = false;
    }
    
      

}