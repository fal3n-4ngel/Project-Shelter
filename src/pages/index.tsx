import Image from "next/image";
import { Inter } from "next/font/google";
import PetBox from "@/components/PetBox";
import PopButton from "@/components/PopButton";
import Knowmore from "@/components/Knowmore";
import dog from "../assets/dog.png";
import Marquee from "react-fast-marquee";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  const homeDogRef = useRef(null);
  const homeTextRef = useRef<any>(null);
  const aboutUsRef = useRef<any>(null);
  const objectivePageRef = useRef<any>(null);
  const collectionPageRef=useRef<any>(null)

  let ctx = gsap.context(() => {});
  let hometl = gsap.timeline(
    ScrollTrigger.create({
      trigger: "#home",
      onEnter: () => {hometl.restart()},
      onLeave: () => {hometl.revert()},
      onEnterBack: () => {hometl.restart()},
      onLeaveBack: () => {hometl.revert()}
    })
  );

  

  const homeLoad = () => {
    ctx.revert();
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
      stagger: .2,
      ease: "power2.easeIn",
    });
    hometl.to(homeDogRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.easeInOut",
    },"-=.5");
  };

  useEffect(() => {
    ctx.add(() => {
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
              <img src="data:image/png;base64,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"></img>
            </div>
            <div className="text-lg text-black font-semibold">Shelter</div>
          </div>
          <div>
            <ul className="flex flex-row justify-between space-x-4 ">
              <li data-te-nav-item-ref>
                <a
                  className="text-black disabled:text-slate-100"
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
              <li data-te-nav-item-ref>
                <a onClick={() => {
                    aboutUsRef?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }}
                  className="text-black disabled:text-slate-100"
                >
                  About Us
                </a>
              </li>
              <li>
                <a onClick={() => {
                    objectivePageRef?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }}>
                  Meet
                </a>
              </li>

              <li>
                <a onClick={() => {
                    collectionPageRef?.current?.scrollIntoView({
                      block: "start",
                      behavior: "smooth",
                    });
                  }}
                  className="text-black disabled:text-slate-100"
                >
                  Collection
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-row justify-between items-center space-x-4">
            <PopButton
              text="Contribute"
              bgcolor="bg-red-500"
              textColor="text-white"
              shadow="rgb(0,0,0)"
            />
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
            <h1 className="flex mb-5 text-7xl font-bold">
              Rhon put some catchphrase here
            </h1>
            <p className="text-lg m-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Sapiente, consequuntur pariatur ut quisquam, recusandae cupiditate
              consectetur molestias quia atque veritatis impedit qui hic
              explicabo ex debitis porro sint. Repellendus, quibusdam?
            </p>
            <div className="mt-4">
              <PopButton
                text="Explore Now"
                bgcolor="bg-red-500"
                textColor="text-white"
                shadow="rgb(0,0,0)"
              />
            </div>
          </div>

          <div
            className="w-[70%] item-center flex justify-end"
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
                <h1 className=" text-red-500 text-3xl font-bold"> Basic </h1>
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
            <div className="w-11/12 flex flex-row ">
              
                <div className=" relative w-full">

                  <div className=" absolute w-40  top-[200px] left-20 shadow-red-500   shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all  ">
                    <Image src={dog} alt="" />
                  </div>

                  <div className=" absolute w-20  top-[50px] left-[120px]  rounded-xl ">
                    <Image src={dog} alt="" />
                  </div>
                  
                  <div className="  absolute w-40  top-[20px] left-[250px] shadow-red-500  shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all">
                  <Image src={dog} alt="" />
                  </div>
                  
                  <div className=" absolute w-20  top-[50px] left-[450px]  rounded-xl ">
                    <Image src={dog} alt="" />
                  </div>

                  <div className="  absolute w-40 top-[200px] left-[420px] shadow-red-500 shadow-[8px_8px_0px_rgb(0,0,0)] translate-y-1 translate-x-1 transition-all ">
                  <Image src={dog} alt="" />
                  </div>

                  <div className=" absolute w-20  top-[250px] left-[290px]  rounded-xl ">
                    <Image src={dog} alt="" />
                  </div>
                  
                </div>
             
              <div className="w-full m-10 flex flex-col justify-center">
                <h1 className="mb-10 text-6xl font-bold text-black">
                  About us
                </h1>

                <p className="text-slate-600 text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit illum saepe, commodi molestiae rerum deleniti
                  architecto aspernatur reiciendis vero accusamus, debitis quam
                  assumenda consectetur eos deserunt delectus amet soluta earum!
                  Blanditiis nisi, aliquam aut quas placeat pariatur maiores
                  repellendus quasi reiciendis ipsum sint fuga officiis magni
                  quaerat numquam distinctio. Eum dolorum atque, ad autem esse
                  dolorem corporis fuga veniam illo! Voluptate, cumque
                  voluptatem. Officia mollitia velit qui adipisci, temporibus
                  eius facere accusamus, rem amet perspiciatis quisquam?
                  Possimus debitis harum aperiam, optio omnis temporibus dolorem
                  inventore sequi amet obcaecati cumque voluptas.
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
            itin George D <span className="px-4 ">•</span> Rhon S George{" "}
            <span className="p-x-4 mx-4">•</span> Vinu B George{" "}
            <span className="p-x-4 mx-4">•</span> Adithya T George{" "}
            <span className="p-x-4 mx-4">•</span> R
          </h1>
          <h1>
            itin George D <span className="px-4 ">•</span> Rhon S George{" "}
            <span className="p-x-4 mx-4">•</span> Vinu B George{" "}
            <span className="p-x-4 mx-4">•</span> Adithya T George{" "}
            <span className="p-x-4 mx-4">•</span> R
          </h1>
          <h1>
            itin George D <span className="px-4 ">•</span> Rhon S George{" "}
            <span className="p-x-4 mx-4">•</span> Vinu B George{" "}
            <span className="p-x-4 mx-4">•</span> Adithya T George{" "}
            <span className="p-x-4 mx-4">•</span> R
          </h1>
        </Marquee>

        <div
          id="meet"
          className="flex flex-col min-h-[70vh] border-b-[2px]  border-black items-center justify-center scroll-mt-5"
          ref={objectivePageRef}
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex  text-black text-6xl font-semibold text-center">
              Meet your pet&lsquo;s needs so{" "}
            </div>
            <div className="flex  text-black text-6xl font-semibold text-center">
              they live happily
            </div>
          </div>
          <div className="mt-6 flex md:flex-row flex-col">
            <div className="w-[330px] h-[180px] flex flex-col bg-white border-2 border-black m-10   rounded-lg shadow-black shadow-[6px_6px_0px_rgb(0,0,0)] -translate-y-1 -translate-x-1 transition-all">
              <div>
                <div className="text-center text-black text-2xl font-semibold">
                  random text ig
                </div>
                <div className="  p-4 text-slate-500-400 text-xl font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit illum saepe, commodi molestiae rerum deleniti
                  architecto
                </div>
              </div>
            </div>

            <div className="w-[330px] h-[180px] flex flex-col bg-white border-2 border-black m-10   rounded-lg shadow-black shadow-[6px_6px_0px_rgb(0,0,0)] -translate-y-1 -translate-x-1 transition-all">
              <div>
                <div className="text-center text-black text-2xl font-semibold">
                  random text ig
                </div>
                <div className="  p-4 text-slate-500-400 text-xl font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit illum saepe, commodi molestiae rerum deleniti
                  architecto
                </div>
              </div>
            </div>

            <div className="w-[330px] h-[180px] flex flex-col bg-white border-2 border-black m-10   rounded-lg shadow-black shadow-[6px_6px_0px_rgb(0,0,0)] -translate-y-1 -translate-x-1 transition-all">
              <div>
                <div className="text-center text-black text-2xl font-semibold">
                  random text ig
                </div>
                <div className="  p-4 text-slate-500-400 text-xl font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit illum saepe, commodi molestiae rerum deleniti
                  architecto
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="collection"
          ref={collectionPageRef}
          className="relative w-[100%] flex flex-col item-center justify-start scroll-mt-11"
        >
          <h1 className="text-black font-bold text-[70px] m-auto">
            Fancy word for collection
          </h1>
          <div className=" flex justify-evenly m-10 h-70vh flex-wrap">
            <PetBox />
            <PetBox />
            <PetBox />
            <PetBox />
            <PetBox />
            <PetBox />
            <PetBox />
            <PetBox />
            <PetBox />
            <Knowmore />
          </div>
        </div>

        <div className="footer p-5 bg-red-500 w-50 flex justify-between">
          <div className="flex items-center space-x-4">
            <img
              className="w-20"
              src="data:image/png;base64,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"
            ></img>
            <div className="text-lg text-white font-semibold">Shelter</div>
          </div>

          <div className="text-white text-md flex space-x-6 justify-between items-center">
            ©deflated pappadam
          </div>
          <div className="buttons flex space-x-5 justify-between items-center">
            <button className="p-4 border rounded-[100%] border-grey-200">
              face
            </button>
            <button className="p-4 border rounded-[100%] border-grey-200">
              inst
            </button>
            <button className="p-4 border rounded-[100%] border-grey-200">
              twit
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
