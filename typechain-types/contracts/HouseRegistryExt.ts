/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from '../common';

export interface HouseRegistryExtInterface extends utils.Interface {
  functions: {
    'addressHouseToken(uint256)': FunctionFragment;
    'buyHouseWithDAI(uint256)': FunctionFragment;
    'buyNFTHouseWithETH(uint256)': FunctionFragment;
    'costHouseDAI(uint256)': FunctionFragment;
    'costHouseETH(uint256)': FunctionFragment;
    'delistHouse(uint256)': FunctionFragment;
    'listHouseSimple(uint256,uint256,uint256,string)': FunctionFragment;
    'setAddrToken(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'addressHouseToken'
      | 'buyHouseWithDAI'
      | 'buyNFTHouseWithETH'
      | 'costHouseDAI'
      | 'costHouseETH'
      | 'delistHouse'
      | 'listHouseSimple'
      | 'setAddrToken'
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'addressHouseToken', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'buyHouseWithDAI', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'buyNFTHouseWithETH', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'costHouseDAI', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'costHouseETH', values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: 'delistHouse', values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: 'listHouseSimple',
    values: [BigNumberish, BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: 'setAddrToken', values: [string]): string;

  decodeFunctionResult(functionFragment: 'addressHouseToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'buyHouseWithDAI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'buyNFTHouseWithETH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'costHouseDAI', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'costHouseETH', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'delistHouse', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'listHouseSimple', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAddrToken', data: BytesLike): Result;

  events: {
    'NewHouse(uint256,address,uint256,uint256,string)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'NewHouse'): EventFragment;
}

export interface NewHouseEventObject {
  id: BigNumber;
  seller: string;
  costETH: BigNumber;
  costDAI: BigNumber;
  addrHouse: string;
}
export type NewHouseEvent = TypedEvent<
  [BigNumber, string, BigNumber, BigNumber, string],
  NewHouseEventObject
>;

export type NewHouseEventFilter = TypedEventFilter<NewHouseEvent>;

export interface HouseRegistryExt extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HouseRegistryExtInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addressHouseToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    buyHouseWithDAI(
      _idHouse: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buyNFTHouseWithETH(
      _idHouse: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    costHouseDAI(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    costHouseETH(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    delistHouse(
      _idHouse: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    listHouseSimple(
      _costETH: BigNumberish,
      _costDAI: BigNumberish,
      _squareHouse: BigNumberish,
      _addressHouse: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setAddrToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addressHouseToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  buyHouseWithDAI(
    _idHouse: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buyNFTHouseWithETH(
    _idHouse: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  costHouseDAI(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  costHouseETH(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  delistHouse(
    _idHouse: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  listHouseSimple(
    _costETH: BigNumberish,
    _costDAI: BigNumberish,
    _squareHouse: BigNumberish,
    _addressHouse: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setAddrToken(
    _tokenAddr: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addressHouseToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    buyHouseWithDAI(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<void>;

    buyNFTHouseWithETH(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<void>;

    costHouseDAI(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    costHouseETH(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    delistHouse(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<void>;

    listHouseSimple(
      _costETH: BigNumberish,
      _costDAI: BigNumberish,
      _squareHouse: BigNumberish,
      _addressHouse: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setAddrToken(_tokenAddr: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'NewHouse(uint256,address,uint256,uint256,string)'(
      id?: null,
      seller?: null,
      costETH?: null,
      costDAI?: null,
      addrHouse?: null
    ): NewHouseEventFilter;
    NewHouse(
      id?: null,
      seller?: null,
      costETH?: null,
      costDAI?: null,
      addrHouse?: null
    ): NewHouseEventFilter;
  };

  estimateGas: {
    addressHouseToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    buyHouseWithDAI(
      _idHouse: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buyNFTHouseWithETH(
      _idHouse: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    costHouseDAI(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    costHouseETH(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    delistHouse(
      _idHouse: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    listHouseSimple(
      _costETH: BigNumberish,
      _costDAI: BigNumberish,
      _squareHouse: BigNumberish,
      _addressHouse: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setAddrToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addressHouseToken(arg0: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    buyHouseWithDAI(
      _idHouse: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buyNFTHouseWithETH(
      _idHouse: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    costHouseDAI(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    costHouseETH(_idHouse: BigNumberish, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    delistHouse(
      _idHouse: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    listHouseSimple(
      _costETH: BigNumberish,
      _costDAI: BigNumberish,
      _squareHouse: BigNumberish,
      _addressHouse: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setAddrToken(
      _tokenAddr: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
