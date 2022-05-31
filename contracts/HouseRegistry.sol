//SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

///@author by CTAPCKPIM
///@title Registry of houses
import './token/HouseNFT.sol';

contract HouseRegistry {
    ///@dev to display in an outer functions
    event NewHouse(uint256 id, address seller, uint256 costETH, uint256 costDAI, string addrHouse);
    ///@dev to display in an outer functions
    event NewTokenAddress(address addr);
    ///@dev to display in an outer functions
    event DelistHouse(string message);

    ///@dev the variable for helping the generation ID
    uint256 internal idNumber = 99999;
    ///@dev the setting time of pause
    uint256 internal readiness = 1 days;
    ///@dev setting the address of token contract
    address internal tokenAddr;
    ///@dev the address of owner
    address internal owner;

    ///@dev setting the owner
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, 'You no the owner');
        _;
    }

    ///@dev array of ID
    uint256[] private houseIndex;

    ///@dev mapping to save all address new token-contracts
    ///@dev all address of token-contracts
    mapping(uint256 => address) public addressHouseToken;

    ///@dev mapping to save time of recharge
    mapping(address => uint256) internal timerRecharge;

    ///@param 'randId' creates a new ID for the house
    ///@dev function for create new NFT house (token-contract)
    ///@dev return to the external interface 'ID' 'seller' 'price' 'addr house(street)'
    ///@dev return ID
    function listHouse(
        uint256 _costETH,
        uint256 _costDAI,
        uint256 _squareHouse,
        address _seller,
        string memory _addressHouse
    ) public returns (uint256) {
        require(_costETH > 0 || _squareHouse > 0, 'Price, square not can bee "0"');
        uint256 randId = _genIdHouse(_squareHouse, _seller, _addressHouse);
        require(addressHouseToken[randId] == address(0), 'This ID already exists');
        HouseNFT houseNFT = new HouseNFT(
            randId,
            _costETH,
            _costDAI,
            _squareHouse,
            _seller,
            _addressHouse
        );
        addressHouseToken[randId] = address(houseNFT);
        houseIndex.push(randId);
        emit NewHouse(randId, _seller, _costETH, _costDAI, _addressHouse);
        return randId;
    }

    ///@dev generation the ID for house
    function _genIdHouse(
        uint256 _squareHouse,
        address _seller,
        string memory _addressHouse
    ) internal view returns (uint256) {
        uint256 randId = uint256(
            keccak256(abi.encodePacked(_squareHouse, _seller, _addressHouse))
        ) % idNumber;
        return randId;
    }

    ///@dev setting not activity house in register
    function delistHouse(uint256 _idHouse) public onlyOwner returns(string memory) {
        HouseNFT(addressHouseToken[_idHouse]).setBool();
        string memory message = 'Successfully';
        emit DelistHouse(message);
        return message;
    }

    ///@dev setting the address of token
    function setAddrToken(address _tokenAddr) public onlyOwner {
        tokenAddr = _tokenAddr;
        emit NewTokenAddress(tokenAddr);
    }

    /*
    function getCheapHouseIds(uint256 _maxCost) public view returns(uint256[] memory) {
       
    }*/
}
