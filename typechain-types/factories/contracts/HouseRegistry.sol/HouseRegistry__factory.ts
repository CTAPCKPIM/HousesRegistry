/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  HouseRegistry,
  HouseRegistryInterface,
} from '../../../contracts/HouseRegistry.sol/HouseRegistry';

const _abi = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'seller',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'costETH',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'costDAI',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'addrHouse',
        type: 'string',
      },
    ],
    name: 'NewHouse',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'addressHouseToken',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_idHouse',
        type: 'uint256',
      },
    ],
    name: 'costHouseDAI',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_idHouse',
        type: 'uint256',
      },
    ],
    name: 'costHouseETH',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_idHouse',
        type: 'uint256',
      },
    ],
    name: 'delistHouse',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_tokenAddr',
        type: 'address',
      },
    ],
    name: 'setAddrToken',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040526201869f6000556001805534801561001b57600080fd5b5061004e7f0dacd1ab4fc80c0bfcca6f8fc460e3e5ccc06237dd1c7d71463561d8075022b060001b6100f860201b60201c565b6100807fdb02eb6aa8208080cd2e4d9811d779e355427579d91d5cae6b93c15c7e632ada60001b6100f860201b60201c565b6100b27fe19a0a45fa264b95dd5c0fc5fbfb023dfb0c19dee12de907cf61ce7d6624c9ef60001b6100f860201b60201c565b33600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506100fb565b50565b610e258061010a6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80633c3b0b4a1461005c578063595020201461007857806371d5db9a146100a8578063e2101f77146100d8578063ecd5f3d9146100f4575b600080fd5b61007660048036038101906100719190610bf6565b610124565b005b610092600480360381019061008d9190610bf6565b6103d6565b60405161009f9190610d07565b60405180910390f35b6100c260048036038101906100bd9190610bf6565b610667565b6040516100cf9190610d07565b60405180910390f35b6100f260048036038101906100ed9190610bcd565b6108f8565b005b61010e60048036038101906101099190610bf6565b610b58565b60405161011b9190610cac565b60405180910390f35b6101507fc990b04004e68fba192d90dbc0fcfcd91d2c4238511085cf8dd862adc28273c260001b610b8b565b61017c7f650afa2fbe6bf4aef154b4714dcc7947fe51a47a0ede63a4e838d65e95c2245b60001b610b8b565b6101a87f6089a13c33db12cd7c752d9e0ea7419e0bca14225d1fb7c3fe7a30b0e88181c360001b610b8b565b6101d47ff6554a8e91b8332a22e0796a2da01581a527bf0ba442defbddde23d0796ca98660001b610b8b565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025b90610cc7565b60405180910390fd5b6102907f71dfa87efeff7caac0d5d2a136c60f4e7db92d4c76a229fb235c9d74b91afab060001b610b8b565b6102bc7faf96a47d0388dc1b7a45b230ebd8a446f81d2f2d74ebf9c29b5b8a8c52bff1de60001b610b8b565b6102e87fcba55f7bc0e3466c4b4ddd58b1c3a1eac631c57fd71d9a9428c64a51a165584060001b610b8b565b6103147f94b99462d866a688e6f12f8a17a24c129ab2c044b894ac120c4b645c71bd98f760001b610b8b565b6103407fd5db123561a1cef4057ffdf3c6d945a815cd07ce1ace90e7feae2fbe21e1b5ea60001b610b8b565b6006600082815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636f374a126040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156103bb57600080fd5b505af11580156103cf573d6000803e3d6000fd5b5050505050565b60006104047f437ccc09cc4a7d424b2d9c010a2ce8551b53007545df19806f222d89487f7b6260001b610b8b565b6104307f5038a962267ce5c697c3a0d8173d81842b3f14248342d71adad7cf393700a90860001b610b8b565b61045c7f04db162786e3eaacd1bed169d5f9af10b249dadaebbc5d3fab1b7e93a5588f2760001b610b8b565b6104887f6d47b131bd0d07a736cba4130cad5f2c1b42a15db1e0d8cffdcf09a63c81016960001b610b8b565b600073ffffffffffffffffffffffffffffffffffffffff166006600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561052b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161052290610ce7565b60405180910390fd5b6105577f521084cb58f10ffc9ae115dc6312000809bc4790a5bbba34e31b147063c4bcfc60001b610b8b565b6105837f6c2ade54fa1d4f6e5361ae28176a9ed01c7e556a4fef9513bec9dfbca76f481560001b610b8b565b6105af7f8521fd04a6130f5cbf1cf84f2cb010a03435c15757c61854d6b54b9dfb1a64ff60001b610b8b565b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639bd5e3556040518163ffffffff1660e01b815260040160206040518083038186803b15801561062857600080fd5b505afa15801561063c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106609190610c1f565b9050919050565b60006106957fcd090d4d7d222ac81593ae20a6d462b6b9142fe8c854c7278b6e12b736d4c24560001b610b8b565b6106c17f75b9f2176d7f17cb76406bc1cb6d8334cef15b696fd8f89e787f4f58fc9ecfbf60001b610b8b565b6106ed7f75b70e3d7fdd8e3b5bae5eac9bb3eaa33a1e0efd774774304e8555a23ce2135d60001b610b8b565b6107197f088c765142fd6cdf4e2162e3635421218a5fa18adc1b8ea2a650b3bc521c244160001b610b8b565b600073ffffffffffffffffffffffffffffffffffffffff166006600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156107bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b390610ce7565b60405180910390fd5b6107e87f755c027adf9ab8c74cd5ca3a06e679adccecdb73042419fe95ff883764dfacff60001b610b8b565b6108147f93399274095a78d67d719432eb452f350393f1151748ba7a966458b86459190560001b610b8b565b6108407f7eec74c8dbb9200be27de2ee12b806f3be93f8691121f44012a45267ec9b974860001b610b8b565b6006600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663664907456040518163ffffffff1660e01b815260040160206040518083038186803b1580156108b957600080fd5b505afa1580156108cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f19190610c1f565b9050919050565b6109247fc990b04004e68fba192d90dbc0fcfcd91d2c4238511085cf8dd862adc28273c260001b610b8b565b6109507f650afa2fbe6bf4aef154b4714dcc7947fe51a47a0ede63a4e838d65e95c2245b60001b610b8b565b61097c7f6089a13c33db12cd7c752d9e0ea7419e0bca14225d1fb7c3fe7a30b0e88181c360001b610b8b565b6109a87ff6554a8e91b8332a22e0796a2da01581a527bf0ba442defbddde23d0796ca98660001b610b8b565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a38576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2f90610cc7565b60405180910390fd5b610a647f71dfa87efeff7caac0d5d2a136c60f4e7db92d4c76a229fb235c9d74b91afab060001b610b8b565b610a907faf96a47d0388dc1b7a45b230ebd8a446f81d2f2d74ebf9c29b5b8a8c52bff1de60001b610b8b565b610abc7f8b4efbd7e3754c5bf4424b5c2e524350fbffaf81d54115cecbda601dd15bc42a60001b610b8b565b610ae87f7dab462375e60fb845d6c1084b0bc2dc7fd05802ace8597b50220550461b9d6f60001b610b8b565b610b147f9cf8ce730d90418a87b81fb976a5344d190cef5a9397f1a6d085bf21ad275e6660001b610b8b565b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60066020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b50565b600081359050610b9d81610dc1565b92915050565b600081359050610bb281610dd8565b92915050565b600081519050610bc781610dd8565b92915050565b600060208284031215610bdf57600080fd5b6000610bed84828501610b8e565b91505092915050565b600060208284031215610c0857600080fd5b6000610c1684828501610ba3565b91505092915050565b600060208284031215610c3157600080fd5b6000610c3f84828501610bb8565b91505092915050565b610c5181610d33565b82525050565b6000610c64601083610d22565b9150610c6f82610d6f565b602082019050919050565b6000610c87601a83610d22565b9150610c9282610d98565b602082019050919050565b610ca681610d65565b82525050565b6000602082019050610cc16000830184610c48565b92915050565b60006020820190508181036000830152610ce081610c57565b9050919050565b60006020820190508181036000830152610d0081610c7a565b9050919050565b6000602082019050610d1c6000830184610c9d565b92915050565b600082825260208201905092915050565b6000610d3e82610d45565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f596f75206e6f20746865206f776e657200000000000000000000000000000000600082015250565b7f5468697320686f75736520646f6573206e6f7420657869737473000000000000600082015250565b610dca81610d33565b8114610dd557600080fd5b50565b610de181610d65565b8114610dec57600080fd5b5056fea2646970667358221220031fc6ab7a98639dc759a8626a8036b018ebcff0936ae34685cd9d0afc110fa864736f6c63430008040033';

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
  static connect(address: string, signerOrProvider: Signer | Provider): HouseRegistry {
    return new Contract(address, _abi, signerOrProvider) as HouseRegistry;
  }
}