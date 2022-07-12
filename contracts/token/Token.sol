//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

/**
 * @author by CTAPCKPIM
 * @title For 'HouseRegistryExt' contract
 */
contract Token is ERC20 {
    /**
     * @dev creating the fake DAI token
     * 
     * - Used in project 'House registry'(HouseRegistry.sol/...)
     */
    constructor(uint256 initialSuppy) ERC20('FakeDAI', 'FDAI') {
        _mint(msg.sender, initialSuppy);
    }
}
