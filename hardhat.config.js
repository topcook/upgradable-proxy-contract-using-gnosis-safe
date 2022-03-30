// hardhat.config.js
require('@nomiclabs/hardhat-waffle')
require('@nomiclabs/hardhat-ethers')
require('@openzeppelin/hardhat-upgrades')
require('@nomiclabs/hardhat-etherscan')
require('dotenv').config()
const { MNEMONIC } = process.env

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: 'rinkeby',
  networks: {

    localhost: {
      url: 'http://127.0.0.1:8545',
    },
    hardhat: {},
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', //for rinkeby
      chainId: 4, //for rinkeby
      // gasPrice: 20000000000,
      accounts: { mnemonic: MNEMONIC },
      // gas: 2100000,
      // gasPrice: 8000000000,
    },
    ropsten: {
      url: 'https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161', //for rinkeby
      // chainId: 97, //for bsc test net
      chainId: 3, //for rinkeby
      // gasPrice: 20000000000,
      accounts: { mnemonic: MNEMONIC },
    },
    bsctestnet: {
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545', // for bsc test net
      chainId: 97, //for bsc test net
      // gasPrice: 20000000000,
      accounts: { mnemonic: MNEMONIC },
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    // apiKey: "VF1PZED1J5D6GC8AZR49J2FF4QRPX58F23"//for bsc
    apiKey: 'A81SHP67CU2TXQVVS7NHB3Z8T921XYYVW5', //for etherscan 0x85...
  },
  solidity: '0.8.2',
}
