import * as dotenv from 'dotenv';

import { HardhatUserConfig, task } from 'hardhat/config';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-waffle';
import '@typechain/hardhat';
import 'hardhat-gas-reporter';
import 'solidity-coverage';
import 'hardhat-contract-sizer';
import '@openzeppelin/hardhat-upgrades';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task('accounts', 'Prints the list of accounts', async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const metemesk_private_key = '0xdf1a845c33fe4f3846d413556f0d10f655692c1612697c6917d2f75a90fbbb40';
const etherscanAPIKey = 'UCQJTW1CE14Q7JW1G7UH1E6N638CIMTER1';

module.exports = {
  solidity: '0.8.4',

  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/415f8a2aaccd47869329d565000d4686',
      accounts: [metemesk_private_key],
    },
  },
  etherscan : { 
    apiKey : etherscanAPIKey, 
  } 
};
