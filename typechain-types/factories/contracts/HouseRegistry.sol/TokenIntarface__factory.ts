/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type {
  TokenIntarface,
  TokenIntarfaceInterface,
} from '../../../contracts/HouseRegistry.sol/TokenIntarface';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_value',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: 'success',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class TokenIntarface__factory {
  static readonly abi = _abi;
  static createInterface(): TokenIntarfaceInterface {
    return new utils.Interface(_abi) as TokenIntarfaceInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TokenIntarface {
    return new Contract(address, _abi, signerOrProvider) as TokenIntarface;
  }
}