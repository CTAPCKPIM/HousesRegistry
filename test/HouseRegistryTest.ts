import { expect } from 'chai';
import { ethers, upgrades } from 'hardhat';

describe('House Registry:', () => {
  let houseRegistry: any;
  let houseFact: any;
  let accountOne: any;
  let accountTwo: any;
  let accountThree: any;
  let houseId: any;

  beforeEach(async () => {
    [accountOne, accountTwo, accountThree] = await ethers.getSigners();
    const HouseRegistry = await ethers.getContractFactory('HouseRegistry', accountOne);
    houseRegistry = await upgrades.deployProxy(HouseRegistry);
    await houseRegistry.deployed();
    // deploy 'HouseFactory'
    const HouseFact = await ethers.getContractFactory('HouseFactory', accountOne);
    houseFact = await HouseFact.deploy();
    await houseFact.deployed();
    // adding an address of the House factory
    await houseRegistry.setAddrFact(houseFact.address);
    // creating ready a house
    const funct = await houseRegistry.listHouse(122, 122, 122, accountTwo.address, '122');
    const data = await funct.wait();
    houseId = await data.events[0].args[0];
  });

  it('Should be deployed', async () => {
    await expect(houseRegistry.address).to.be.properAddress;
  });

  it('Should be set the address of the factory', async () => {
    const funct = await houseRegistry.setAddrFact(houseFact.address);
    const data = await funct.wait();
    expect(data.events[0].args[0]).to.eq(houseFact.address);
  });

  it('Should be set the address of the token', async () => {
    const TokenDAI = await ethers.getContractFactory('Token', accountOne);
    const tokenDAI = await TokenDAI.deploy(10000);
    await tokenDAI.deployed();
    const funct = await houseRegistry.setAddrToken(tokenDAI.address);
    const data = await funct.wait();
    expect(data.events[0].args[0]).to.eq(tokenDAI.address);
  });

  it('Should be creating a new house', async () => {
    const funct = await houseRegistry
      .connect(accountTwo)
      .listHouse(123, 123, 123, accountTwo.address, '123');
    const data = await funct.wait();
    expect(data.events[0].args[0]).to.eq(23797);
    // console.log(data.events[0].args[0]);
  });

  it('Should be returned the error: "Price, square not can bee 0"', async () => {
    const message = 'Price, square not can bee "0"';
    await expect(houseRegistry.listHouse(0, 0, 0, accountTwo.address, '123')).to.be.revertedWith(
      message
    );
  });

  it('Should be returned the error: "This ID already exists"', async () => {
    const message = 'This ID already exists';
    await expect(
      houseRegistry.connect(accountThree).listHouse(122, 122, 122, accountTwo.address, '122')
    ).to.be.revertedWith(message);
  });

  it('Should be delisted by owner', async () => {
    const message = 'You no the owner';
    await expect(houseRegistry.connect(accountTwo).delistHouse(houseId)).to.be.revertedWith(
      message
    );
  });

  it('Should be delisted house', async () => {
    const funct = await houseRegistry.delistHouse(houseId);
    const data = await funct.wait();
    expect(data.events[0].args[0]).to.eq('Successfully');
  });
});
