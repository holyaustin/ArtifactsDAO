const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const Artifacts = await hre.ethers.getContractFactory("Artifacts");
  const artifacts = await Artifacts.deploy();
  await artifacts.deployed();
  console.log("Genic Contract deployed to:", artifacts.address);

  fs.writeFileSync('./config.js', `
  export const ArtifactContractAddress = "${artifacts.address}"
  `)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
