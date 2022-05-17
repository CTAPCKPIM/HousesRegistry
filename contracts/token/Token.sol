//SPDX-License-Identifier: MIT

pragma solidity 0.8.0;

import "./@openzeppelin/contracts/token/ERC20/ERC20.sol"; 

contract Token is ERC20 {
    constructor(uint256 initialSuppy) ERC20 ("FakeDAI","FDAI"){
        _mint(msg.sender, initialSuppy);
    }
}