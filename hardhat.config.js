require("@nomicfoundation/hardhat-toolbox");

const path = require('path');
console.log('PATH TO ENV: ' + path.resolve(__dirname, '.env'));
require('dotenv').config({ path: path.resolve(__dirname, '.env') })

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.0",
  networks: {
    sepolia: {
      url: process.env.SEP_URL,
      accounts: [process.env.PRIV_KEY]
    },
  }
};
