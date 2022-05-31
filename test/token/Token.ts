import { expect } from 'chai';
import { ethers } from 'hardhat';


describe('Token "DAI"', () =>{
	let accountOwner: any;
	let tokenDAI: any;
	let totalBalance: any = 100000;

	beforeEach(async () => {
		[accountOwner] = await ethers.getSigners();
		const TokenDAI = await ethers.getContractFactory('Token', accountOwner);
		tokenDAI = await TokenDAI.deploy(totalBalance);
		await tokenDAI.deployed();
	});

	it('Should be deployed', async () =>{
		expect(tokenDAI.address).to.be.properAddress;
	});

	it('Should be correct the balance', async () =>{
		const balance = await tokenDAI.balanceOf(accountOwner.address); 
		expect(balance).to.eq(totalBalance);
		//console.log(balance);
	});

});