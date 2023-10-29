require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {
      chainId: 5777,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [
        "0x8e0427747c05b14ac9d1f41dc4f969cb5f3f6c7a0662f992e54e6008f40f48ee",
      ],
    }
  },
  paths: {
    artifacts: "./src/artifacts",
  }
};
