//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import './IHouseNFT.sol';

///@author by CTAPCKPIM
///@title token-contract 'House NFT'

///@dev inherit from ERC721 smart contract
contract HouseNFT is IHouseNFT, ERC721 {
    ///@dev information about House-token
    uint256 public override idHouse;
    uint256 public override costETH;
    uint256 public override costDAI;
    uint256 public squareHouse;
    address public override seller;
    address public buyer;
    string public addressHouse;
    bool public exist;

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

    ///@dev setting the address of buyer
    function setBuyer(address _buyer) external override {
        buyer = _buyer;
    }

    ///@dev setting the value 'false' for turning off the house from the register
    function setBool() external override {
        exist = false;
    }
}
