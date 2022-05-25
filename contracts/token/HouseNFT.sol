//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import './IHouseNFT.sol';

///@author by CTAPCKPIM
///@title token-contract 'House NFT'

///@dev inherit from ERC721 smart contract
contract HouseNFT is IHouseNFT, ERC721 {
    ///@dev information about House-token
    uint256 internal idHouse;
    uint256 internal costETH;
    uint256 internal costDAI;
    uint256 internal squareHouse;
    address internal seller;
    address internal buyer;
    string internal addressHouse;
    bool internal exist;

    constructor(
        uint256 randId,
        uint256 _costETH,
        uint256 _costDAI,
        uint256 _squareHouse,
        address _seller,
        string memory _addressHouse
    ) ERC721('HouseToken', 'HT') {
        idHouse = randId;
        costETH = _costETH;
        costDAI = _costDAI;
        squareHouse = _squareHouse;
        seller = _seller;
        buyer = address(0);
        addressHouse = _addressHouse;
        exist = true;
    }

    ///@dev getting the ID of house
    function getId() external view override returns (uint256) {
        return idHouse;
    }

    ///@dev get the price in ETH
    function getCostETH() external view override returns (uint256) {
        return costETH;
    }

    ///@dev get the price in DAI
    function getCostDAI() external view override returns (uint256) {
        return costDAI;
    }

    ///@dev get the address of seller
    function getSeller() external view override returns (address) {
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
