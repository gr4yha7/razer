import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
// import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nahmii/hardhat-nvm";

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

<<<<<<< HEAD
const config: any = {
=======
const config: HardhatUserConfig = {
>>>>>>> d1cf85b7032541ce9ef33220ace19e88f567cd0c
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
<<<<<<< HEAD
        runs: 200
=======
        runs: 500
>>>>>>> d1cf85b7032541ce9ef33220ace19e88f567cd0c
      }
    }
  },
  networks: {
     nahmii: {
      url: process.env.L2_URL || 'https://l2.testnet.nahmii.io',
<<<<<<< HEAD
      gasPrice: 15000000,
      nvm: true
    },
  },

  nvm: {
    solcVersion: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
=======
      accounts: process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
      gasPrice: 15000000,
      gas: 10000000,
      nvm: true
    },
  },
>>>>>>> d1cf85b7032541ce9ef33220ace19e88f567cd0c
  // gasReporter: {
  //   enabled: process.env.REPORT_GAS !== undefined,
  //   currency: "USD",
  // },
  // etherscan: {
  //   apiKey: process.env.ETHERSCAN_API_KEY,
  // },
};

export default config;
