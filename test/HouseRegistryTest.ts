import { expect } from 'chai';
import { ethers } from 'hardhat';

describe('House Registry', () => {
  let houseRegistry: any;
  let accountOne: any;
  let accountTwo: any; 
  let accountThree: any;

  beforeEach(async () => {
    [accountOne, accountTwo, accountThree] = await ethers.getSigners();
    const HouseRegistry = await ethers.getContractFactory('HouseRegistry', accountOne);
    houseRegistry = await HouseRegistry.deploy();
    await houseRegistry.deployed();
  });

  it('Should be deployed', async () => {
    expect(houseRegistry.address).to.be.properAddress;
  });

});


