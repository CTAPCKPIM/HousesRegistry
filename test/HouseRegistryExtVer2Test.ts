import { expect } from 'chai';
import { ethers, upgrades } from 'hardhat';

describe('House Registry Ext Version(2):', () => {
  let houseRegistryExtVer2: any;
  let houseFact: any;
  let tokenDAI: any;
  let accOne: any;
  let accTwo: any;
  let accThree: any;
  let accFour: any;
  const totalBalance: any = 100000;
  let houseId: any;

  beforeEach(async () => {
    [accOne, accTwo, accThree, accFour] = await ethers.getSigners();
    // contract of House Registry
    const HouseRegistryExtV2 = await ethers.getContractFactory('HouseRegistryExtVer2', accOne);
    houseRegistryExtVer2 = await upgrades.deployProxy(HouseRegistryExtV2);
    await houseRegistryExtVer2.deployed();
    // deploy 'HouseFactory'
    const HouseFact = await ethers.getContractFactory('HouseFactory', accOne);
    houseFact = await HouseFact.deploy();
    await houseFact.deployed();
    // adding an address of the House factory
    await houseRegistryExtVer2.setAddrFact(houseFact.address);
    // contract of tokens DAI
    const TokenDAI = await ethers.getContractFactory('Token', accOne);
    tokenDAI = await TokenDAI.deploy(totalBalance);
    await tokenDAI.deployed();
    await houseRegistryExtVer2.setAddrToken(tokenDAI.address);
    const funct = await houseRegistryExtVer2.connect(accTwo).listHouseSimple(1, 1, 1, '1');
    const data = await funct.wait();
    houseId = await data.events[0].args[0];
  });

  it('Should be deployed: HouseRegistryExtVer2/Token', async () => {
    // deploy House Registry
    await expect(houseRegistryExtVer2.address).to.be.properAddress;
    // deploy tokenDAI
    await expect(tokenDAI.address).to.be.properAddress;
  });

  it('Should be returned the error: After 24 hours', async () => {
    const message = 'After 24 hours';
    await expect(
      houseRegistryExtVer2.connect(accTwo).listHouseSimple(2, 2, 2, '2')
    ).to.be.revertedWith(message);
  });

  it('Should be creating a new house(ExtVer2)', async () => {
    const funct = await houseRegistryExtVer2.connect(accThree).listHouseSimple(3, 3, 3, '3');
    const data = await funct.wait();
    expect(data.events[0].args[0]).to.eq(31878);
    // console.log(data.events[0].args[0]);
  });

  it('Should be returned the error(ETH): Does not exist', async () => {
    const message = 'Does not exist';
    await expect(houseRegistryExtVer2.connect(accTwo).buyNFTHouseWithETH(33300)).to.be.revertedWith(
      message
    );
  });

  it('Should be: Buying a house for ETH', async () => {
    const tx = await houseRegistryExtVer2
      .connect(accThree)
      .buyNFTHouseWithETH(houseId, { value: 1 });
    await expect(() => tx).to.changeEtherBalance(accThree, -1);
    // console.log(tx);
  });

  it('Should be returned the error(DAI): Does not exist', async () => {
    const message = 'Does not exist';
    await expect(houseRegistryExtVer2.connect(accTwo).buyNFTHouseWithDAI(33300)).to.be.revertedWith(
      message
    );
  });

  it('Should be: Buying a house for DAI', async () => {
    await tokenDAI.connect(accOne).approve(houseRegistryExtVer2.address, totalBalance);
    await houseRegistryExtVer2.connect(accOne).buyNFTHouseWithDAI(houseId);
  });

  it('Should: make a contract update', async () => {
    // Create a smart contract
    const HouseRegistryExt = await ethers.getContractFactory('HouseRegistryExt');
    const beacon = await upgrades.deployBeacon(HouseRegistryExt);
    const houseRegistryExt = await upgrades.deployBeaconProxy(beacon, HouseRegistryExt);
    await houseRegistryExt.deployed();
    // deploy 'HouseFactory'
    const Factory = await ethers.getContractFactory('HouseFactory', accOne);
    const factory = await Factory.deploy();
    await factory.deployed();
    // adding an address of the House factory
    await houseRegistryExt.setAddrFact(factory.address);
    // Create house(Ext)
    const funct = await houseRegistryExt.connect(accFour).listHouseSimple(5, 5, 5, '5');
    const data = await funct.wait();
    const id = await data.events[0].args[0];
    // Upgrade a 'First' SC to the 'Second' SC version 2
    const HouseRegistryExtTwo = await ethers.getContractFactory('HouseRegistryExtVer2');
    let houseRegistryExtTwo = await upgrades.upgradeBeacon(beacon, HouseRegistryExtTwo);
    houseRegistryExtTwo = HouseRegistryExtTwo.attach(houseRegistryExt.address);
    await houseRegistryExtTwo.deployed();
    // Create house(ExtVre2)
    await houseRegistryExtTwo.connect(accThree).listHouseSimple(4, 4, 4, '4');
    await houseRegistryExtTwo.connect(accOne).listHouseSimple(1, 1, 1, '1');
    // Call a function 'getExpensiveHouseIds()'
    const result = await houseRegistryExtTwo.getExpensiveHouseIds();
    // Compare house ID with ID house from 'listHouseSimple'
    expect(result).to.eq(id);
    // Comparing address houses
    expect(await houseRegistryExt.addressHouseToken(id)).to.eq(
      await houseRegistryExtTwo.addressHouseToken(id)
    );
  });
});
