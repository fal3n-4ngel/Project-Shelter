import { ethers } from "hardhat";

async function main() {
	const Stray = await ethers.getContractFactory("Stray");
	const stray = await Stray.deploy(92, "ipfs://QmSq15fGUNwYZs6X5pYMKM7SruMMsgiC6vAb5oFEmPm6A4/");

	await stray.deployed();
	console.log("Stray Deployed To:", stray.address);
	
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
