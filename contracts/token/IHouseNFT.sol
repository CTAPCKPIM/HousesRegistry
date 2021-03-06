//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import '@openzeppelin/contracts/token/ERC721/IERC721.sol';

/**
 * @author by CTAPCKPIM
 * @title interface for 'HouseRegistryExt' contract
 */

/**
 * @dev interface 'IHouseNFT' inherit from 'IERC721'
 */
interface IHouseNFT is IERC721 {
    /**
     * @dev setting the address of buyer
     */
    function setBuyer(address _buyer) external;

    /**
     * @dev setting the value 'false' for turning off the house from the register
     */
    function setBool() external;

    /**
     * @dev cost a token in ETH
     */
    function costETH() external view returns (uint256);

    /**
     * @dev cost a token in DAI
     */
    function costDAI() external view returns (uint256);

    /**
     * @dev ID of token
     */
    function idHouse() external view returns (uint256);

    /**
     * @dev returns a seller
     */
    function seller() external view returns (address);
}
