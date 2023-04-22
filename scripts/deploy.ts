import { ethers } from "hardhat";

async function main() {
	const Stray = await ethers.getContractFactory("Stray");
	const stray = await Stray.deploy(92, "ipfs://QmXMeP6Z3SnsXVxgfnTdoido6vtpPo89j2GtVGMGK8vUez/");

	await stray.deployed();
	console.log("Stray Deployed To:", stray.address);
	
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
