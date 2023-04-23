import { BigNumber, ethers } from "ethers";
import Image from "next/image";
import PopButton from "@/components/PopButton";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import Stray from "../../artifacts/contracts/Stray.sol/Stray.json";
import logo from "../../assets/logo.png";
import Footer from "@/components/Footer";
import p1 from "../../../public/nfts/4.png";
import p2 from "../../../public/nfts/65.png";
import p3 from "../../../public/nfts/43.png";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/logo.png";
import logo3 from "../../assets/logo.png";

export default function Contribute() {
  const [totalMinted, setTotalMinted] = useState(0);
  const [amount, setAmount] = useState<number | null>(null);
  const [accounts, setAccounts] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    console.log(accounts);
    setIsConnected(Boolean(accounts[0]));
  }, [isConnected, accounts]);

  const inputRef = useRef<HTMLInputElement>(null);

  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  const onAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;
    setAmount(value);
  };

  const connectAccount = async () => {
    if (window.ethereum) {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccounts(accounts);
    }
  };

  const mintNFT = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window?.ethereum);
      const signer = provider?.getSigner();
      const contract = new ethers.Contract(contractAddress, Stray.abi, signer);
      try {
        const response = await contract.mint(BigNumber.from(90), {
          value: ethers.utils.parseEther((200).toString()),
        });
        await contract.wait();
        console.log("response:", response);
      } catch (err) {
        console.log("error:", err);
      }
    }
  };

  return (
    <div className="w-11/12 m-auto overflow-hidden">
      <nav
        id="navbar"
        className=" sticky z-10 bg-white top-0 w-full   border-b-2 border-gray-600"
      >
        <div className="flex  flex-row items-center justify-between ">
          <div className="flex flex-row items-center justify-start">
            <div className="w-20">
              <Image src={logo} alt="" className=" " />
            </div>
            <div className="text-lg text-black font-semibold">Shelter</div>
          </div>
          <div className="mr-20">
            <ul className=" flex flex-row justify-between space-x-4 ">
              <li>
                <a
                  href="../#home"
                  className="text-black disabled:text-slate-100"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="../#aboutUs"
                  className="text-black disabled:text-slate-100"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="../#meet"
                  className="text-black disabled:text-slate-100"
                >
                  Meet
                </a>
              </li>

              <li>
                <a
                  href="../#collection"
                  className="text-black disabled:text-slate-100"
                >
                  Collection
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className=" -mt-[10%] w-full border-black border-2 bg-slate-200 ">
        <div className="h-screen  flex  flex-col items-center justify-center">
          <div className=" ">
            <div className=" justify-end items-end  w-[50%]">
              <div className=" absolute w-40  top-[70%] left-[5%] shadow-red-500   shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all  ">
                <Image src={p1} alt="" />
              </div>

              <div className=" absolute w-20  top-[55%] left-[5%]  rounded-xl ">
                <Image src={logo1} alt="" />
              </div>

              <div className="  absolute w-40  top-[50%] left-[12%] shadow-red-500  shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all">
                <Image src={p2} alt="" />
              </div>

              <div className=" absolute w-20  top-[55%] left-[25%] rounded-xl ">
                <Image src={logo2} alt="" />
              </div>

              <div className="  absolute w-40 top-[70%] left-[20%] shadow-red-500 shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all ">
                <Image src={p3} alt="" />
              </div>

              <div className=" absolute w-20  top-[75%] left-[15%]  rounded-xl ">
                <Image src={logo3} alt="" />
              </div>
            </div>


          </div>

          <div>
          <div className=" justify-end items-end  w-[50%]">
              <div className=" absolute w-40  top-[30%] left-[70%] shadow-red-500   shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all  ">
                <Image src={p1} alt="" />
              </div>

              <div className=" absolute w-20  top-[15%] left-[70%]  rounded-xl ">
                <Image src={logo1} alt="" />
              </div>

              <div className="  absolute w-40  top-[10%] left-[77%] shadow-red-500  shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all">
                <Image src={p2} alt="" />
              </div>

              <div className=" absolute w-20  top-[15%] left-[90%] rounded-xl ">
                <Image src={logo2} alt="" />
              </div>

              <div className="  absolute w-40 top-[30%] left-[85%] shadow-red-500 shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all ">
                <Image src={p3} alt="" />
              </div>

              <div className=" absolute w-20  top-[35%] left-[80%]  rounded-xl ">
                <Image src={logo3} alt="" />
              </div>
            </div>
          </div>

          <div className="mt-[10%] bg-white w-4/12  text-black rounded-lg p-5">
            <h2 className="font-semibold">Currency</h2>
            <div className="flex gap-1 bg-slate-100 p-1 rounded-md">
              <Image alt="matic" src={"/matic.svg"} height={15} width={15} />
              <p>Matic &#40;MATIC&#41;</p>
            </div>
            <h2 className="font-semibold">Amount</h2>
            <div
              onClick={() => inputRef.current?.focus()}
              className="flex text-md flex-col bg-slate-100 p-1 rounded-md"
            >
              <div className="flex justify-end bg-slate-100 p-1 rounded-md">
                <input
                  ref={inputRef}
                  className="appearance-none w-full px-2 start-0 text-right text-sm font-semibold border-0 bg-transparent focus:outline-none"
                  type="number"
                  onChange={onAmountChange}
                  min={100}
                  value={amount ?? ""}
                  name=""
                  id=""
                />
                <p className="w-[50px] text-md font-semibold">INR</p>
              </div>
              <div className="flex text-right text-sm font-medium justify-end w-full bg-slate-100 p-1 rounded-md">
                <p dir="rtl" className="w-full px-2 start-0">
                  {typeof amount == "number" ? amount * 0.012 : "0"}
                </p>
                <p className="w-[50px]">MATIC*</p>
              </div>
            </div>
            {!isConnected ? (
              <div className="w-full justify-end items-end">
                <button
                  onClick={connectAccount}
                  className="p-2  bg-red-500  text-white font-semibold rounded-lg drop-shadow-[0px_0px_0px_rgb(0,0,0)] mt-4 hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all "
                >
                  Connect Wallet
                </button>
              </div>
            ) : (
              <div className="w-full justify-end items-end">
                <button
                  onClick={mintNFT}
                  className="p-2 bg-red-500  text-white font-semibold rounded-lg drop-shadow-[0px_0px_0px_rgb(0,0,0)] mt-4 hover:shadow-none shadow-[6px_6px_0px_rgb(0,0,0)]  hover:translate-y-0 -translate-y-1 hover:translate-x-0 -translate-x-1 transition-all "
                >
                  Donate
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
