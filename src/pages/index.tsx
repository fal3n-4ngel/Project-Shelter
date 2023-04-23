import Image from "next/image";
import { Inter } from "next/font/google";
import PetBox from "@/components/PetBox";
import PopButton from "@/components/PopButton";
import Knowmore from "@/components/Knowmore";
import dog from "../assets/dog.png";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo.png";
import logo2 from "../assets/logo.png";
import logo3 from "../assets/logo.png";
import p1 from "../../public/nfts/65.png";
import p2 from "../../public/nfts/83.png";
import p3 from "../../public/nfts/99.png";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import 'font-awesome/css/font-awesome.min.css';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);

  const homeDogRef = useRef(null);
  const homeTextRef = useRef<any>(null);
  const aboutUsRef = useRef<any>(null);
  const objectivePageRef = useRef<any>(null);
  const collectionPageRef = useRef<any>(null);

  let ctx = gsap.context(() => {});
  let hometl = gsap.timeline(
    ScrollTrigger.create({
      trigger: "#home",
      onEnter: () => {
        hometl.restart();
      },
      onLeave: () => {
        hometl.revert();
      },
      onEnterBack: () => {
        hometl.restart();
      },
      onLeaveBack: () => {
        hometl.revert();
      },
    })
  );

  const homeLoad = () => {
    hometl.set(gsap.utils.toArray(homeTextRef.current.children), {
      transformOrigin: "left",
      opacity: 0,
      scale: 0.7,
    });
    hometl.set(homeDogRef.current, { opacity: 0, scale: 0.9 });
    hometl.to(gsap.utils.toArray(homeTextRef.current.children), {
      opacity: 1,
      scale: 1,
      duration: 1,
      stagger: 0.2,
      ease: "power2.easeIn",
    });
    hometl.to(
      homeDogRef.current,
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.easeInOut",
      },
      "-=.5"
    );
  };

  useEffect(() => {
    ctx.add(() => {
      ScrollTrigger.refresh()
      homeLoad();
    });
    return () => {
      ctx.revert();
    };
  });

  return (
    <main className="w-11/12 center m-auto text-black items-center justify-center">
      <nav
        id="navbar"
        className=" sticky z-10 bg-white top-0 w-full   border-b-2 border-gray-600"
      >
        <div className="flex  flex-row items-center justify-between ">
          <div className="flex flex-row items-center justify-start">
            <div className="w-20">
              <Image src={logo} alt="" className=" " />
            </div>
            <div className="text-lg text-black font-semibold">Project Shelter</div>
          </div>
          <div>
            <ul className="flex flex-row justify-between space-x-4   ">
              <li>
                <a
                  className="text-black disabled:text-slate-100 cursor-pointer  "
                  onClick={() => {
                    homeTextRef?.current?.scrollIntoView({
                      block: "end",
                      behavior: "smooth",
                    });
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    aboutUsRef?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }}
                  className="text-black disabled:text-slate-100 cursor-pointer "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  onClick={() => {
                    objectivePageRef?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }}
                  className="text-black disabled:text-slate-100 cursor-pointer "
                >
                  Meet
                </a>
              </li>

              <li>
                <a
                  onClick={() => {
                    collectionPageRef?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }}
                  className="text-black disabled:text-slate-100 cursor-pointer "
                >
                  Collection
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-between items-center space-x-4">
            <a href="./contribute">
              <PopButton
                text="Contribute"
                bgcolor="bg-red-500"
                textColor="text-white"
                shadow="rgb(0,0,0)"
              />
            </a>
          </div>
        </div>
      </nav>

      <div className="flex flex-col border-2  border-black min-h-[100vh] relative ">
        <div
          id="home"
          className="flex text-black  border-b-[2px] border-black max-w-[2000px] min-h-[60vh]  justify-between pl-12"
        >
          <div
            className="max-w-[60%] flex flex-col  justify-center"
            ref={homeTextRef}
          >
            <h1 className="flex mb-5 text-7xl font-bold opacity-0">
            Isn&lsquo;t it about time we repay our companions what they deserve?
            </h1>
            <p className="text-lg m-4 text-gray-600 opacity-0">
            Throughout history, every attempt to progress has been aimed at enhancing human life while neglecting the well-being of <b>flora and fauna</b>,
            which have often been sacrificed for <b>our benefit</b>. Our medium seeks to provide benefits to the long-suffering domestic animals
            of the world who have been persecuted for ages,in the form of aids and resources under the banner of concerned organizations.
            Introducing <b>Project Shelter</b>. 
            </p>
            <div className="m-0 opacity-0">
              <div>
                <PopButton
                  text="Know more"
                  bgcolor="bg-red-500"
                  textColor="text-white"
                  shadow="rgb(0,0,0)"
                  click={() => {
                    objectivePageRef?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }}
               /> 
              </div>
            </div>
          </div>

          <div
            className="w-[70%] item-center flex justify-end  opacity-0"
            ref={homeDogRef}
          >
            <div className="  bg-white flex flex-col border-2 border-black m-10  shadow-red-500 w-9/13  rounded-2xl shadow-[10px_10px_0px_rgb(0,0,0)]  translate-x-[-15px]  translate-y-[-15px] transition-all">
              <div className=" rounded-t-lg img w-[100%] h-[80%] bg-black">
                <Image src={dog} alt="" className="h-[100%] rounded-t-xl " />
              </div>
              <div className=" flex justify-between items-center m-5">
                <div className="flex justify-center flex-col mt-1 gap-1">
                  <h1 className="text-black text-3xl font-bold">
                    Ritin D George
                  </h1>
                </div>
                <h1 className=" text-red-500 text-3xl font-bold"> #00 </h1>
              </div>
            </div>
          </div>
        </div>

        <div
          id="aboutUs"
          className="flex flex-row justify-between min-h-8/10 border-b-[2px] border-black scroll-mt-12"
          ref={aboutUsRef}
        >
          <div>
            <div className="w-10/12 flex flex-row ">
              <div className=" relative w-full">
                <div className=" absolute w-40  top-[200px] left-20 shadow-red-500   shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all  ">
                  <Image src={p1} alt="" />
                </div>

                <div className=" absolute w-20  top-[50px] left-[120px]  rounded-xl ">
                  <Image src={logo1} alt="" />
                </div>

                <div className="  absolute w-40  top-[20px] left-[250px] shadow-red-500  shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all">
                  <Image src={p2} alt="" />
                </div>

                <div className=" absolute w-20  top-[50px] left-[450px]  rounded-xl ">
                  <Image src={logo2} alt="" />
                </div>

                <div className="  absolute w-40 top-[200px] left-[420px] shadow-red-500 shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all ">
                  <Image src={p3} alt="" />
                </div>

                <div className=" absolute w-20  top-[250px] left-[290px]  rounded-xl ">
                  <Image src={logo3} alt="" />
                </div>
              </div>

              <div className="mt-6 w-10/12 ml-40 flex flex-col justify-end">
                <h1 className="mb-10 text-6xl font-bold text-black">
                  About us
                </h1>

                <p className="text-slate-600 text-xl mb-5">
                  <b>Project Shelter</b> is a decentralized donation initiative put-together by deflated pappadam, where 
                  we aim to revolutionize normy fundraisers/donation platforms into a whole new level by implementing various 
                  aspects of blockchain, web3 and crypto. Our gateway ensures that both the donor and the donee gets 
                  maximum benefits out of the donations made which makes the intiatve beneficial for all the concerned parties.
                  Via Project Shelter, we guarantee the development of a sustainable environment that ensures the sustenace of the 
                  project. We have partnered with <b>P</b>eople <b>F</b>or <b>A</b>nimals with an aim to provide shelter and the 
                  necessary resources for the estranged members of the animal kingdom.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Marquee
          className="bg-red-500 text-white border-black border-b-2 text-3xl min-h-[4.5rem]"
          gradient={false}
          speed={40}
        >
          <h1>
            evelutionizing Fundraisers <span className="px-4 ">•</span> Web3 + Blockchain{" "}
            <span className="p-x-4 mx-4">•</span> Self Sustained{" "}
            <span className="p-x-4 mx-4">•</span> Multiended Donations{" "}
            <span className="p-x-4 mx-4">•</span> R
          </h1>
          <h1>
            evelutionizing Fundraisers <span className="px-4 ">•</span> Web3 + Blockchain{" "}
            <span className="p-x-4 mx-4">•</span> Self Sustained{" "}
            <span className="p-x-4 mx-4">•</span> Multiended Donations{" "}
            <span className="p-x-4 mx-4">•</span> R
          </h1>
          <h1>
            evelutionizing Fundraisers <span className="px-4 ">•</span> Web3 + Blockchain{" "}
            <span className="p-x-4 mx-4">•</span> Self Sustained{" "}
            <span className="p-x-4 mx-4">•</span> Multiended Donations{" "}
            <span className="p-x-4 mx-4">•</span> R
          </h1>
        </Marquee>

        <div
          id="meet"
          className="flex flex-col min-h-[80vh] border-b-[2px]  border-black items-center justify-center scroll-mt-5"
          ref={objectivePageRef}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex  text-black text-6xl font-semibold text-center">
              How does Project Shelter work?
            </div>
          </div>
          <div className="mt-6 flex max-md:flex-col flex-row flex-wrap justify-center ">
            <div className="w-[330px] h-[400px] flex flex-col bg-white border-2 border-black m-10   rounded-lg shadow-black shadow-[6px_6px_0px_rgb(0,0,0)] -translate-y-1 -translate-x-1 transition-all">
              <div>
                <div className="mt-3 text-center text-black text-2xl font-semibold">
                  Intial phase
                </div>
                <div className="  p-4 text-slate-500-400 text-xl font-thin">
                Our medium offers a donation pathway where donors can contribute using MATIC tokens.
                The benefactors are provided NFTs, corresponding to their donations, which they can hold on to as a <b>digital collectible</b>
                 and can be considered as a proof of transaction, permanently maintained in the <b>blockchain</b>.
                </div>
              </div>
            </div>

            <div className="w-[330px] h-[400px] flex flex-col bg-white border-2 border-black m-10   rounded-lg shadow-black shadow-[6px_6px_0px_rgb(0,0,0)] -translate-y-1 -translate-x-1 transition-all">
              <div>
                <div className="text-center text-black text-2xl font-semibold">
                  Intermediate phase
                </div>
                <div className="  p-4 text-slate-500-400 text-xl font-thin">
                 The minted NFTs can be resold/auctioned off to interested individuals, which ensures that the benefactors are 
                 given <b>a chance</b> to profit off their initial contributions. This provides for a stage of ecosystem where the 
                 NFTs are recycled ,which ensures that the donations are enjoyed by <b>multiple fronts</b>, rather than it getting <b>singled out</b>.
                </div>
              </div>
            </div>

            <div className="w-[330px] h-[400px] flex flex-col bg-white border-2 border-black m-10   rounded-lg shadow-black shadow-[6px_6px_0px_rgb(0,0,0)] -translate-y-1 -translate-x-1 transition-all">
              <div>
                <div className="text-center text-black text-2xl font-semibold">
                  State of sustenance
                </div>
                <div className="  p-4 text-slate-500-400 text-xl font-thin">
                As NFTs are recycled through resale or auction, the creators of the NFTs (i.e., us) receive a portion of the transaction as <b>creator charges</b>. 
                This amount is then passed on to relevant organizations, creating a sustainable source of funding for the project and its goals 
                by utilizing the surplus resources made available.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="collection"
          ref={collectionPageRef}
          className="relative w-[100%] flex flex-col item-center scroll-mt-11"
        >
          <h1 className="text-black font-bold text-[70px] m-auto">
            Our Populace
          </h1>
          <div className=" flex justify-evenly m-auto w-[80rem] h-70vh items-center flex-wrap">
            <PetBox name="Twinkle Toes" img="/nfts/4.png" rarity="#4" />
            <PetBox name="Lady Fluffington" img="/nfts/26.png" rarity="#26" />
            <PetBox name="Captain Kidd" img="/nfts/43.png" rarity="#43" />
            <PetBox name="Frankie Furrball" img="/nfts/45.png" rarity="#45" />
            <PetBox name="Baahdass" img="/nfts/83.png" rarity="#83" />
            <a href="https://testnets.opensea.io/collection/project-shelter" target="blank">
              <Knowmore />
            </a>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </main>
  );
}
