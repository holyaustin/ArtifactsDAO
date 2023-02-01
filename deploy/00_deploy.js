require("hardhat-deploy")
require("hardhat-deploy-ethers")

const { networkConfig } = require("../helper-hardhat-config")


const private_key = network.config.accounts[0]
const wallet = new ethers.Wallet(private_key, ethers.provider)

module.exports = async ({ deployments }) => {
    console.log("Wallet Ethereum Address:", wallet.address)
    const chainId = network.config.chainId
    const tokensToBeMinted = networkConfig[chainId]["tokensToBeMinted"]
    /**
        //deploy Simplecoin
        const SimpleCoin = await ethers.getContractFactory('SimpleCoin', wallet);
        console.log('Deploying Simplecoin...');
        const simpleCoin = await SimpleCoin.deploy(tokensToBeMinted);
        await simpleCoin.deployed()
        console.log('SimpleCoin deployed to:', simpleCoin.address);
     */

    //deploy Simplecoin
    const Artifacts = await ethers.getContractFactory('Artifacts', wallet);
    console.log('Deploying Artifacts...');
    const artifacts = await Artifacts.deploy();
    await artifacts.deployed()
    console.log('Artifacts deployed to:', artifacts.address);

    //deploy FilecoinMarketConsumer
    const FilecoinMarketConsumer = await ethers.getContractFactory('FilecoinMarketConsumer', wallet);
    console.log('Deploying FilecoinMarketConsumer...');
    const filecoinMarketConsumer = await FilecoinMarketConsumer.deploy();
    await filecoinMarketConsumer.deployed()
    console.log('FilecoinMarketConsumer deployed to:', filecoinMarketConsumer.address);

    //deploy DealRewarder
    const DealRewarder = await ethers.getContractFactory('DealRewarder', wallet);
    console.log('Deploying DealRewarder...');
    const dealRewarder = await DealRewarder.deploy();
    await dealRewarder.deployed()
    console.log('DealRewarder deployed to:', dealRewarder.address);
}