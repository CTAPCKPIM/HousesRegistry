const hre = require('hardhat');
const ethers = hre.ethers;
const upgrades = hre.upgrades;
const fs = require('fs');
const path = require('path');

//npx hardhat run --network localhost scripts/deploy.ts

async function main() {
  const [deployer] = await ethers.getSigners();

  /*deploy 'House Registry Ext Ver2' contract*/
  const HouseRegistryExtVer2 = await ethers.getContractFactory('HouseRegistryExtVer2', deployer);
  const houseRegistryExtVer2 = await upgrades.deployProxy(HouseRegistryExtVer2);
  await houseRegistryExtVer2.deployed(); 

  /*deploy 'House Factory' contract*/
  const HouseFactory = await ethers.getContractFactory('HouseFactory', deployer);
  const houseFactory = await HouseFactory.deploy();
  await houseFactory.deployed();

  /*deploy 'fake DAI' contract*/
  const Token = await ethers.getContractFactory('Token', deployer);
  const token = await Token.deploy(1000000);
  await token.deployed();

  console.log('1) Address of owner: ', await deployer.getAddress());
  console.log('2) HouseRegistryExtVer2 deployed to:', houseRegistryExtVer2.address);
  console.log('3) HouseFactory deployed to:', houseFactory.address);
  console.log('4) Fake DAI token deployed to:', token.address);

  saveFrontEndFiles({
    HouseRegistryExtVer2: houseRegistryExtVer2,
    HouseFactory: houseFactory,
    Token: token,
  });
}

function saveFrontEndFiles(contracts: any) {
  const contractsDir = path.join(__dirname, '/..', 'front/nextjs-blog/contracts');

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  Object.entries(contracts).forEach((contract_item) => {
    const [name, contract]: any = contract_item;

    if (contract) {
      fs.writeFileSync(
        path.join(contractsDir, '/', name + 'Contract-address.json'),
        JSON.stringify({ [name]: contract.address }, undefined, 2) //////////
      );
    }

    const ContractArtifact = hre.artifacts.readArtifactSync(name);

    fs.writeFileSync(
      path.join(contractsDir, '/', name + '.json'),
      JSON.stringify(ContractArtifact, null, 2)
    );
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
