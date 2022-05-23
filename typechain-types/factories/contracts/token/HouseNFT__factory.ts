/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HouseNFT,
  HouseNFTInterface,
} from "../../../contracts/token/HouseNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "randId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_costETH",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_costDAI",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_squareHouse",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "string",
        name: "_addressHouse",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCostDAI",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCostETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSeller",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "setBool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
    ],
    name: "setBuyer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
    ],
    name: "setSeller",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002bb338038062002bb3833981810160405281019062000037919062000347565b6040518060400160405280600a81526020017f486f757365546f6b656e000000000000000000000000000000000000000000008152506040518060400160405280600281526020017f48540000000000000000000000000000000000000000000000000000000000008152508160009080519060200190620000bb929190620001f7565b508060019080519060200190620000d4929190620001f7565b5050508560068190555084600781905550836008819055508260098190555081600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555030600c60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600d9080519060200190620001cf929190620001f7565b506001600e60006101000a81548160ff021916908315150217905550505050505050620005d8565b8280546200020590620004c9565b90600052602060002090601f01602090048101928262000229576000855562000275565b82601f106200024457805160ff191683800117855562000275565b8280016001018555821562000275579182015b828111156200027457825182559160200191906001019062000257565b5b50905062000284919062000288565b5090565b5b80821115620002a357600081600090555060010162000289565b5090565b6000620002be620002b8846200041f565b620003f6565b905082815260208101848484011115620002d757600080fd5b620002e484828562000493565b509392505050565b600081519050620002fd81620005a4565b92915050565b600082601f8301126200031557600080fd5b815162000327848260208601620002a7565b91505092915050565b6000815190506200034181620005be565b92915050565b60008060008060008060c087890312156200036157600080fd5b60006200037189828a0162000330565b96505060206200038489828a0162000330565b95505060406200039789828a0162000330565b9450506060620003aa89828a0162000330565b9350506080620003bd89828a01620002ec565b92505060a087015167ffffffffffffffff811115620003db57600080fd5b620003e989828a0162000303565b9150509295509295509295565b60006200040262000415565b9050620004108282620004ff565b919050565b6000604051905090565b600067ffffffffffffffff8211156200043d576200043c62000564565b5b620004488262000593565b9050602081019050919050565b6000620004628262000469565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620004b357808201518184015260208101905062000496565b83811115620004c3576000848401525b50505050565b60006002820490506001821680620004e257607f821691505b60208210811415620004f957620004f862000535565b5b50919050565b6200050a8262000593565b810181811067ffffffffffffffff821117156200052c576200052b62000564565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b620005af8162000455565b8114620005bb57600080fd5b50565b620005c98162000489565b8114620005d557600080fd5b50565b6125cb80620005e86000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c806370a08231116100ad578063b88d4fde11610071578063b88d4fde1461031d578063c87b56dd14610339578063dbd0e1b614610369578063e985e9c514610387578063e99d2866146103b75761012c565b806370a082311461027957806395d89b41146102a95780639bd5e355146102c7578063a22cb465146102e5578063a3f09ad6146103015761012c565b806342842e0e116100f457806342842e0e146101e75780635d1ca631146102035780636352211e1461022157806366490745146102515780636f374a121461026f5761012c565b806301ffc9a71461013157806306fdde0314610161578063081812fc1461017f578063095ea7b3146101af57806323b872dd146101cb575b600080fd5b61014b600480360381019061014691906118a5565b6103d3565b6040516101589190611c1f565b60405180910390f35b6101696104b5565b6040516101769190611c3a565b60405180910390f35b610199600480360381019061019491906118f7565b610547565b6040516101a69190611bb8565b60405180910390f35b6101c960048036038101906101c49190611869565b6105cc565b005b6101e560048036038101906101e09190611763565b6106e4565b005b61020160048036038101906101fc9190611763565b610744565b005b61020b610764565b6040516102189190611ddc565b60405180910390f35b61023b600480360381019061023691906118f7565b61076e565b6040516102489190611bb8565b60405180910390f35b610259610820565b6040516102669190611ddc565b60405180910390f35b61027761082a565b005b610293600480360381019061028e91906116fe565b610847565b6040516102a09190611ddc565b60405180910390f35b6102b16108ff565b6040516102be9190611c3a565b60405180910390f35b6102cf610991565b6040516102dc9190611ddc565b60405180910390f35b6102ff60048036038101906102fa919061182d565b61099b565b005b61031b600480360381019061031691906116fe565b6109b1565b005b610337600480360381019061033291906117b2565b6109f5565b005b610353600480360381019061034e91906118f7565b610a57565b6040516103609190611c3a565b60405180910390f35b610371610afe565b60405161037e9190611bb8565b60405180910390f35b6103a1600480360381019061039c9190611727565b610b28565b6040516103ae9190611c1f565b60405180910390f35b6103d160048036038101906103cc91906116fe565b610bbc565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916148061049e57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104ae57506104ad82610c00565b5b9050919050565b6060600080546104c490612001565b80601f01602080910402602001604051908101604052809291908181526020018280546104f090612001565b801561053d5780601f106105125761010080835404028352916020019161053d565b820191906000526020600020905b81548152906001019060200180831161052057829003601f168201915b5050505050905090565b600061055282610c6a565b610591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058890611d5c565b60405180910390fd5b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b60006105d78261076e565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610648576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063f90611d9c565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16610667610cd6565b73ffffffffffffffffffffffffffffffffffffffff161480610696575061069581610690610cd6565b610b28565b5b6106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc90611cfc565b60405180910390fd5b6106df8383610cde565b505050565b6106f56106ef610cd6565b82610d97565b610734576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161072b90611dbc565b60405180910390fd5b61073f838383610e75565b505050565b61075f838383604051806020016040528060008152506109f5565b505050565b6000600654905090565b6000806002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610817576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080e90611d3c565b60405180910390fd5b80915050919050565b6000600754905090565b6000600e60006101000a81548160ff021916908315150217905550565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156108b8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108af90611d1c565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60606001805461090e90612001565b80601f016020809104026020016040519081016040528092919081815260200182805461093a90612001565b80156109875780601f1061095c57610100808354040283529160200191610987565b820191906000526020600020905b81548152906001019060200180831161096a57829003601f168201915b5050505050905090565b6000600854905090565b6109ad6109a6610cd6565b83836110dc565b5050565b80600b60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b610a06610a00610cd6565b83610d97565b610a45576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a3c90611dbc565b60405180910390fd5b610a5184848484611249565b50505050565b6060610a6282610c6a565b610aa1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a9890611d7c565b60405180910390fd5b6000610aab6112a5565b90506000815111610acb5760405180602001604052806000815250610af6565b80610ad5846112bc565b604051602001610ae6929190611b94565b6040516020818303038152906040525b915050919050565b6000600a60009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b80600a60006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166002600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610d518361076e565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000610da282610c6a565b610de1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dd890611cdc565b60405180910390fd5b6000610dec8361076e565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610e2e5750610e2d8185610b28565b5b80610e6c57508373ffffffffffffffffffffffffffffffffffffffff16610e5484610547565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610e958261076e565b73ffffffffffffffffffffffffffffffffffffffff1614610eeb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ee290611c7c565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f5b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f5290611c9c565b60405180910390fd5b610f66838383611469565b610f71600082610cde565b6001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fc19190611f17565b925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546110189190611e90565b92505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a46110d783838361146e565b505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561114b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114290611cbc565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405161123c9190611c1f565b60405180910390a3505050565b611254848484610e75565b61126084848484611473565b61129f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161129690611c5c565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606000821415611304576040518060400160405280600181526020017f30000000000000000000000000000000000000000000000000000000000000008152509050611464565b600082905060005b6000821461133657808061131f90612064565b915050600a8261132f9190611ee6565b915061130c565b60008167ffffffffffffffff811115611378577f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040519080825280601f01601f1916602001820160405280156113aa5781602001600182028036833780820191505090505b5090505b6000851461145d576001826113c39190611f17565b9150600a856113d291906120ad565b60306113de9190611e90565b60f81b81838151811061141a577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a856114569190611ee6565b94506113ae565b8093505050505b919050565b505050565b505050565b60006114948473ffffffffffffffffffffffffffffffffffffffff1661160a565b156115fd578373ffffffffffffffffffffffffffffffffffffffff1663150b7a026114bd610cd6565b8786866040518563ffffffff1660e01b81526004016114df9493929190611bd3565b602060405180830381600087803b1580156114f957600080fd5b505af192505050801561152a57506040513d601f19601f8201168201806040525081019061152791906118ce565b60015b6115ad573d806000811461155a576040519150601f19603f3d011682016040523d82523d6000602084013e61155f565b606091505b506000815114156115a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161159c90611c5c565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614915050611602565b600190505b949350505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600061164061163b84611e1c565b611df7565b90508281526020810184848401111561165857600080fd5b611663848285611fbf565b509392505050565b60008135905061167a81612539565b92915050565b60008135905061168f81612550565b92915050565b6000813590506116a481612567565b92915050565b6000815190506116b981612567565b92915050565b600082601f8301126116d057600080fd5b81356116e084826020860161162d565b91505092915050565b6000813590506116f88161257e565b92915050565b60006020828403121561171057600080fd5b600061171e8482850161166b565b91505092915050565b6000806040838503121561173a57600080fd5b60006117488582860161166b565b92505060206117598582860161166b565b9150509250929050565b60008060006060848603121561177857600080fd5b60006117868682870161166b565b93505060206117978682870161166b565b92505060406117a8868287016116e9565b9150509250925092565b600080600080608085870312156117c857600080fd5b60006117d68782880161166b565b94505060206117e78782880161166b565b93505060406117f8878288016116e9565b925050606085013567ffffffffffffffff81111561181557600080fd5b611821878288016116bf565b91505092959194509250565b6000806040838503121561184057600080fd5b600061184e8582860161166b565b925050602061185f85828601611680565b9150509250929050565b6000806040838503121561187c57600080fd5b600061188a8582860161166b565b925050602061189b858286016116e9565b9150509250929050565b6000602082840312156118b757600080fd5b60006118c584828501611695565b91505092915050565b6000602082840312156118e057600080fd5b60006118ee848285016116aa565b91505092915050565b60006020828403121561190957600080fd5b6000611917848285016116e9565b91505092915050565b61192981611f4b565b82525050565b61193881611f5d565b82525050565b600061194982611e4d565b6119538185611e63565b9350611963818560208601611fce565b61196c8161219a565b840191505092915050565b600061198282611e58565b61198c8185611e74565b935061199c818560208601611fce565b6119a58161219a565b840191505092915050565b60006119bb82611e58565b6119c58185611e85565b93506119d5818560208601611fce565b80840191505092915050565b60006119ee603283611e74565b91506119f9826121ab565b604082019050919050565b6000611a11602583611e74565b9150611a1c826121fa565b604082019050919050565b6000611a34602483611e74565b9150611a3f82612249565b604082019050919050565b6000611a57601983611e74565b9150611a6282612298565b602082019050919050565b6000611a7a602c83611e74565b9150611a85826122c1565b604082019050919050565b6000611a9d603883611e74565b9150611aa882612310565b604082019050919050565b6000611ac0602a83611e74565b9150611acb8261235f565b604082019050919050565b6000611ae3602983611e74565b9150611aee826123ae565b604082019050919050565b6000611b06602c83611e74565b9150611b11826123fd565b604082019050919050565b6000611b29602f83611e74565b9150611b348261244c565b604082019050919050565b6000611b4c602183611e74565b9150611b578261249b565b604082019050919050565b6000611b6f603183611e74565b9150611b7a826124ea565b604082019050919050565b611b8e81611fb5565b82525050565b6000611ba082856119b0565b9150611bac82846119b0565b91508190509392505050565b6000602082019050611bcd6000830184611920565b92915050565b6000608082019050611be86000830187611920565b611bf56020830186611920565b611c026040830185611b85565b8181036060830152611c14818461193e565b905095945050505050565b6000602082019050611c34600083018461192f565b92915050565b60006020820190508181036000830152611c548184611977565b905092915050565b60006020820190508181036000830152611c75816119e1565b9050919050565b60006020820190508181036000830152611c9581611a04565b9050919050565b60006020820190508181036000830152611cb581611a27565b9050919050565b60006020820190508181036000830152611cd581611a4a565b9050919050565b60006020820190508181036000830152611cf581611a6d565b9050919050565b60006020820190508181036000830152611d1581611a90565b9050919050565b60006020820190508181036000830152611d3581611ab3565b9050919050565b60006020820190508181036000830152611d5581611ad6565b9050919050565b60006020820190508181036000830152611d7581611af9565b9050919050565b60006020820190508181036000830152611d9581611b1c565b9050919050565b60006020820190508181036000830152611db581611b3f565b9050919050565b60006020820190508181036000830152611dd581611b62565b9050919050565b6000602082019050611df16000830184611b85565b92915050565b6000611e01611e12565b9050611e0d8282612033565b919050565b6000604051905090565b600067ffffffffffffffff821115611e3757611e3661216b565b5b611e408261219a565b9050602081019050919050565b600081519050919050565b600081519050919050565b600082825260208201905092915050565b600082825260208201905092915050565b600081905092915050565b6000611e9b82611fb5565b9150611ea683611fb5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611edb57611eda6120de565b5b828201905092915050565b6000611ef182611fb5565b9150611efc83611fb5565b925082611f0c57611f0b61210d565b5b828204905092915050565b6000611f2282611fb5565b9150611f2d83611fb5565b925082821015611f4057611f3f6120de565b5b828203905092915050565b6000611f5682611f95565b9050919050565b60008115159050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b82818337600083830152505050565b60005b83811015611fec578082015181840152602081019050611fd1565b83811115611ffb576000848401525b50505050565b6000600282049050600182168061201957607f821691505b6020821081141561202d5761202c61213c565b5b50919050565b61203c8261219a565b810181811067ffffffffffffffff8211171561205b5761205a61216b565b5b80604052505050565b600061206f82611fb5565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156120a2576120a16120de565b5b600182019050919050565b60006120b882611fb5565b91506120c383611fb5565b9250826120d3576120d261210d565b5b828206905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b7f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760008201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000602082015250565b7f4552433732313a2062616c616e636520717565727920666f7220746865207a6560008201527f726f206164647265737300000000000000000000000000000000000000000000602082015250565b7f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460008201527f656e7420746f6b656e0000000000000000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860008201527f697374656e7420746f6b656e0000000000000000000000000000000000000000602082015250565b7f4552433732314d657461646174613a2055524920717565727920666f72206e6f60008201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000602082015250565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b7f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60008201527f776e6572206e6f7220617070726f766564000000000000000000000000000000602082015250565b61254281611f4b565b811461254d57600080fd5b50565b61255981611f5d565b811461256457600080fd5b50565b61257081611f69565b811461257b57600080fd5b50565b61258781611fb5565b811461259257600080fd5b5056fea2646970667358221220037c0e98d9f7ee90d145d56f4eeae10a44fd513e6d75833b94e10dd9d17345ab64736f6c63430008040033";

type HouseNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HouseNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HouseNFT__factory extends ContractFactory {
  constructor(...args: HouseNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    randId: BigNumberish,
    _costETH: BigNumberish,
    _costDAI: BigNumberish,
    _squareHouse: BigNumberish,
    _seller: string,
    _addressHouse: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HouseNFT> {
    return super.deploy(
      randId,
      _costETH,
      _costDAI,
      _squareHouse,
      _seller,
      _addressHouse,
      overrides || {}
    ) as Promise<HouseNFT>;
  }
  override getDeployTransaction(
    randId: BigNumberish,
    _costETH: BigNumberish,
    _costDAI: BigNumberish,
    _squareHouse: BigNumberish,
    _seller: string,
    _addressHouse: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      randId,
      _costETH,
      _costDAI,
      _squareHouse,
      _seller,
      _addressHouse,
      overrides || {}
    );
  }
  override attach(address: string): HouseNFT {
    return super.attach(address) as HouseNFT;
  }
  override connect(signer: Signer): HouseNFT__factory {
    return super.connect(signer) as HouseNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HouseNFTInterface {
    return new utils.Interface(_abi) as HouseNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HouseNFT {
    return new Contract(address, _abi, signerOrProvider) as HouseNFT;
  }
}