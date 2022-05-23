/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  HouseRegistry,
  HouseRegistryInterface,
} from "../../../contracts/HouseRegistry.sol/HouseRegistry";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "costETH",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "costDAI",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "addrHouse",
        type: "string",
      },
    ],
    name: "NewHouse",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addressHouseToken",
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
        internalType: "uint256",
        name: "_idHouse",
        type: "uint256",
      },
    ],
    name: "costHouseDAI",
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
        name: "_idHouse",
        type: "uint256",
      },
    ],
    name: "costHouseETH",
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
        name: "_idHouse",
        type: "uint256",
      },
    ],
    name: "delistHouse",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddr",
        type: "address",
      },
    ],
    name: "setAddrToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526201869f6000556001805534801561001b57600080fd5b5033600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506108a08061006c6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633c3b0b4a1461005c578063595020201461007857806371d5db9a146100a8578063e2101f77146100d8578063ecd5f3d9146100f4575b600080fd5b61007660048036038101906100719190610671565b610124565b005b610092600480360381019061008d9190610671565b61024a565b60405161009f9190610782565b60405180910390f35b6100c260048036038101906100bd9190610671565b6103a6565b6040516100cf9190610782565b60405180910390f35b6100f260048036038101906100ed9190610648565b610502565b005b61010e60048036038101906101099190610671565b6105d6565b60405161011b9190610727565b60405180910390f35b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146101b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101ab90610742565b60405180910390fd5b6006600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636f374a126040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561022f57600080fd5b505af1158015610243573d6000803e3d6000fd5b5050505050565b60008073ffffffffffffffffffffffffffffffffffffffff166006600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156102ee576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e590610762565b60405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639bd5e3556040518163ffffffff1660e01b815260040160206040518083038186803b15801561036757600080fd5b505afa15801561037b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061039f919061069a565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166006600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561044a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161044190610762565b60405180910390fd5b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663664907456040518163ffffffff1660e01b815260040160206040518083038186803b1580156104c357600080fd5b505afa1580156104d7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104fb919061069a565b9050919050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610592576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058990610742565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60066020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000813590506106188161083c565b92915050565b60008135905061062d81610853565b92915050565b60008151905061064281610853565b92915050565b60006020828403121561065a57600080fd5b600061066884828501610609565b91505092915050565b60006020828403121561068357600080fd5b60006106918482850161061e565b91505092915050565b6000602082840312156106ac57600080fd5b60006106ba84828501610633565b91505092915050565b6106cc816107ae565b82525050565b60006106df60108361079d565b91506106ea826107ea565b602082019050919050565b6000610702601a8361079d565b915061070d82610813565b602082019050919050565b610721816107e0565b82525050565b600060208201905061073c60008301846106c3565b92915050565b6000602082019050818103600083015261075b816106d2565b9050919050565b6000602082019050818103600083015261077b816106f5565b9050919050565b60006020820190506107976000830184610718565b92915050565b600082825260208201905092915050565b60006107b9826107c0565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f596f75206e6f20746865206f776e657200000000000000000000000000000000600082015250565b7f5468697320686f75736520646f6573206e6f7420657869737473000000000000600082015250565b610845816107ae565b811461085057600080fd5b50565b61085c816107e0565b811461086757600080fd5b5056fea26469706673582212209ee2492b3b93206ffcc96ba837f87e519099970fbd931d5a8454fed3a48dcbe964736f6c63430008040033";

type HouseRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HouseRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HouseRegistry__factory extends ContractFactory {
  constructor(...args: HouseRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HouseRegistry> {
    return super.deploy(overrides || {}) as Promise<HouseRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): HouseRegistry {
    return super.attach(address) as HouseRegistry;
  }
  override connect(signer: Signer): HouseRegistry__factory {
    return super.connect(signer) as HouseRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HouseRegistryInterface {
    return new utils.Interface(_abi) as HouseRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HouseRegistry {
    return new Contract(address, _abi, signerOrProvider) as HouseRegistry;
  }
}
