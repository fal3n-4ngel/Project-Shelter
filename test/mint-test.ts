import { expect } from "chai";
import { ethers } from "hardhat";

describe("Stray", ()=> {
	it("Should mint an NFT to an account", async () => {
		const stray = await ethers.getContractFactory("Stray");
		const deployedStray = await stray.deploy(92, "ipfs://QmXMeP6Z3SnsXVxgfnTdoido6vtpPo89j2GtVGMGK8vUez/");
		console.log(stray);
		await deployedStray.deployed();

		const recipient = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
		let balanceBeforeMinting = await deployedStray.provider.getBalance(recipient)
		expect(await deployedStray.balanceOf(recipient)).to.equal(0)
		console.log(balanceBeforeMinting);
		let mintedToken = await deployedStray.mint(2, { from: recipient, value: ethers.utils.parseEther('1'), });
		await mintedToken.wait();

		let balanceAfterMinting = await deployedStray.provider.getBalance(recipient)
		console.log(balanceAfterMinting);
		
		expect(balanceBeforeMinting).greaterThan(balanceAfterMinting);

		await deployedStray.setWithdrawWalletAddress(recipient);
		await deployedStray.withdraw();
		let balanceAfterWithdrawing = await deployedStray.provider.getBalance(recipient)
		console.log(balanceAfterWithdrawing);
		console.log(await deployedStray.getOwnerTokens(recipient));
		
		// expect(await deployedStray.balanceOf(recipient)).to.equal(1)
	})
})