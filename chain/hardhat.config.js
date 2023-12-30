require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

task("accounts",()=>{
  console.log("sample ");
})


module.exports = {
  allowUnlimitedContractSize: true,
  solidity: "0.8.19",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  localhost: {
    url: "http://127.0.0.1:8545"
  },
  networks: {
    hardhat: {
      accounts: {
        mnemonic: "door dice sail fancy proof pet ready buyer betray write thumb fly",
      },
      chainId: 1337
    },
  },
   
};
