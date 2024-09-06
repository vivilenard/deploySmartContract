require('dotenv').config();
// console.log("env is loaded: " + process.env.ENV_LOADED);
const {ethers} =  require('ethers');
const {providers} = require('ethers');
const {AlchemyProvider} = require('ethers');
const hardhat = require('hardhat');
const {contractFactory} = require('ethers');

// new ethers.Contract( address , abi , signerOrProvider )

async function main(){
    // new ethers.ContractFactory( interface , bytecode [ , signer ] )
    const artifacts = await hardhat.artifacts.readArtifact("contracts/Counter.sol:Counter");

    const provider = new AlchemyProvider('sepolia', process.env.API_KEY);

    const signer = new ethers.Wallet( process.env.PRIV_KEY, provider);

    const factory = new ethers.ContractFactory(artifacts.abi , artifacts.bytecode , signer);

    const contract = await factory.deploy();

    
    await contract.waitForDeployment();
    
    console.log("contract address: " + await contract.getAddress());

}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error);
  process.exit(1);
});