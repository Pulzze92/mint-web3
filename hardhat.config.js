/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "testnet",
  networks: {
    hardhat: {},
    testnet: {
      url: process.env.REACT_APP_ROPSTEN_RPC_URL,
      accounts: [`0x${process.env.REACT_APP_PRIVATE_KEY}`]
    }
  },
  etherscan: {
    apiKey: process.env.REACT_APP_ETHERSCAN_KEY
  }
};