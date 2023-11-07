require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  // defaultNetwork: "hardhat",
  networks: {
    // hardhat: {
    //   chainId: 31337
    // },
    mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/udESWx-ap5XZviimCpxzBZW4PrF-bp2t`,
      accounts: [`0x${"42cd790292461c86547b4586aac8d3eeba45c18dcdbc1d8521cecdaafee96334"}`]
    },
   
  },
};
