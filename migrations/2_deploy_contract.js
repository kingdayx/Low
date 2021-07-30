
const Low = artifacts.require("Low");
const LowBit = artifacts.require("LowBit");
const util = require("util");
const fs = require("fs");
const path = require("path");
const writeFile = util.promisify(fs.writeFile);

module.exports = async function (deployer) {
  const lowbit = await deployer.deploy(
    LowBit,
    Low.address,
  );
  const low = await deployer.deploy(Low, "Low", "LOW");
  console.log('CryptoHerosToken address: ', Low.address);
  console.log("LowBit address: ", LowBit.address);
  // const addresses = {
  //   tokenAddress: CryptoHerosToken.address
  // };

  // await writeFile(
  //   path.join(__dirname, "..", "dapp", "src", "addresses.json"),
  //   JSON.stringify(addresses)
  // );
};

// https://github.com/ensdomains/ens/blob/master/migrations/2_deploy_contracts.js
