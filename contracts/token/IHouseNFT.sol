//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import '@openzeppelin/contracts/token/ERC721/IERC721.sol';

///@author by CTAPCKPIM
///@title interface fot 'HouseRegistryExt' contract

//@dev interface 'IHouseNFT' inherit from 'IERC721'
interface IHouseNFT is IERC721 {
    ///@dev getting the ID of house
    function getId() external view returns (uint256);

    ///@dev get the price in ETH
    function getCostETH() external view returns (uint256);

    ///@dev get the price in DAI
    function getCostDAI() external view returns (uint256);

    ///@dev get the address of seller
    function getSeller() external view returns (address);

    ///@dev setting the address of buyer
    function setBuyer(address _buyer) external;

    ///@dev setting the address of buyer
    function setSeller(address _seller) external;

    ///@dev setting the value 'false' for turning off the house from the register
    function setBool() external;
}
