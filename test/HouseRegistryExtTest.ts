import { expect } from 'chai';
import { ethers, upgrades } from 'hardhat';

describe('House Registry Ext:', () => {
	let houseRegistryExt: any;
	let tokenDAI: any;
  	let accountOne: any;
  	let accountTwo: any;
  	let accountThree: any;
  	let totalBalance: any = 100000;
  	let houseId: any;

  	beforeEach(async ()=>{
  		[accountOne, accountTwo, accountThree] = await ethers.getSigners();
  		//contract of House Registry
  		const HouseRegistryExt = await ethers.getContractFactory('HouseRegistryExt', accountOne);
  		houseRegistryExt = await upgrades.deployProxy(HouseRegistryExt);
  		await houseRegistryExt.deployed();
  		//await houseRegistryExt.initialize();
  		//contract of tokens DAI
  		const TokenDAI = await ethers.getContractFactory('Token', accountOne);
  		tokenDAI = await TokenDAI.deploy(totalBalance);
  		await tokenDAI.deployed();
  		const functAddr = await houseRegistryExt.setAddrToken(tokenDAI.address);
  		const funct = await houseRegistryExt.connect(accountTwo).listHouseSimple(1, 1, 1, '1');
  		const data = await funct.wait();
  		houseId = data.events[0].args[0];
  	});

  	it('Should be deployed: HouseRegistryExt/Token', async () => {
  		//deploy House Registry
    	expect(houseRegistryExt.address).to.be.properAddress;
    	//deploy tokenDAI
    	expect(tokenDAI.address).to.be.properAddress;
  	});
  	
  	it('Should be returned the error: After 24 hours', async ()=> {
  		const message = 'After 24 hours';
  		await expect(houseRegistryExt.connect(accountTwo).
  			listHouseSimple(2, 2, 2, '2')).to.be.revertedWith(message);
  	});

  	it('Should be creating a new house(Ext)', async ()=> {
  		const funct = await houseRegistryExt.connect(accountThree).listHouseSimple(3, 3, 3, '3');
  		const data = await funct.wait();
  		expect(data.events[0].args[0]).to.eq(31878);
  		//console.log(data.events[0].args[0]);
  	});

  	it('Should be returned the error(ETH): Does not exist', async ()=> {
  		const message = 'Does not exist';
  		await expect(houseRegistryExt.connect(accountTwo).
  			buyNFTHouseWithETH(33300)).to.be.revertedWith(message);
  	});
  	
  	it('Should be: Buying a house for ETH', async ()=> { 
  		const tx = await houseRegistryExt.connect(accountThree).
  			buyNFTHouseWithETH(houseId, {value: 1});
  		await expect(()=> tx).to.changeEtherBalance(accountThree, - 1);
  		//console.log(tx);
  	});

  	it('Should be returned the error(DAI): Does not exist', async ()=> {
  		const message = 'Does not exist';
  		await expect(houseRegistryExt.connect(accountTwo).
  			buyNFTHouseWithDAI(33300)).to.be.revertedWith(message);
  	});

  	it('Should be: Buying a house for DAI', async ()=> {
  		const tokenFunct = await tokenDAI.connect(accountOne).approve(houseRegistryExt.address, totalBalance);
  		const tx = await houseRegistryExt.connect(accountOne).buyNFTHouseWithDAI(houseId);
  	});
});