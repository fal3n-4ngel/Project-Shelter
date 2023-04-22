import { BigNumber, ethers } from 'ethers';
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import Stray from "../../artifacts/contracts/Stray.sol/Stray.json"

export default function Contribute() {
	const [totalMinted, setTotalMinted] = useState(0);
	const [amount, setAmount] = useState<number|null>(null);
	const [accounts, setAccounts] = useState([]);
	const [isConnected, setIsConnected] = useState(false);

	useEffect(() => {
		console.log(accounts);
		setIsConnected(Boolean(accounts[0]));
	}, [isConnected, accounts])
	

	const inputRef = useRef<HTMLInputElement>(null);

	const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

	const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = !Number.isNaN(e.target.valueAsNumber) ? e.target.valueAsNumber : null; 
		setAmount(value);
	}

	const connectAccount = async () => {
		if (window.ethereum) {
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts",
			})
			setAccounts(accounts);
		}
	}

	const mintNFT = async () => {
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window?.ethereum)
			const signer = provider?.getSigner();
			const contract = new ethers.Contract(contractAddress, Stray.abi, signer);
			try {
				const response = await contract.mint(BigNumber.from(90), {value: ethers.utils.parseEther((200).toString())});
				console.log("response:", response);
			} catch (err) {
				console.log("error:", err);
			}
		}
	}


	return (
	<div className='h-screen w-fullb bg-slate-200'>
		<div className='w-full h-full flex flex-col items-center justify-center'>
			<div className='bg-white text-black rounded-lg p-5'>
				<h2 className='font-semibold'>Currency</h2>
				<div className='flex gap-1 bg-slate-100 p-1 rounded-md'>
					<Image alt="matic" src={"/matic.svg"} height={15} width={15} />
					<p>Matic &#40;MATIC&#41;</p>
				</div>
				<h2 className='font-semibold'>Amount</h2>
				<div onClick={()=> inputRef.current?.focus()} className='flex text-md flex-col bg-slate-100 p-1 rounded-md'>
					<div className='flex justify-end bg-slate-100 p-1 rounded-md'>
						<input ref={inputRef} className='appearance-none w-full px-2 start-0 text-right text-sm font-semibold border-0 bg-transparent focus:outline-none' type="number" onChange={onAmountChange} min={100} value={amount ?? ''} name="" id="" />
						<p className='w-[50px] text-md font-semibold'>INR</p>
					</div>	
					<div className='flex text-right text-sm font-medium justify-end w-full bg-slate-100 p-1 rounded-md'>
						<p dir='rtl' className='w-full px-2 start-0'>{typeof(amount) == "number" ? amount * 0.0120 : "0"}</p>
						<p className='w-[50px]'>MATIC*</p>
					</div>
				</div>
				{!isConnected ? 
					<button onClick={connectAccount} className='p-2 bg-black text-white font-semibold rounded-lg mt-4'>
						Connect Wallet
					</button> :
					<button onClick={mintNFT} className='p-2 bg-black text-white font-semibold rounded-lg mt-4'>
						Donate
					</button>
				}
			</div>
		</div>
	</div>
	)
}