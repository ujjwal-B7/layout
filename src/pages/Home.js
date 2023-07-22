import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="content md:h-screen h-[42rem] bg-cover text-white w-full bg-[url('./image/background.png')]">
        <div className="flex flex-col gap-y-24  items-center pt-72">
          <p className=" md:text-6xl sm:text-5xl text-3xl w-2/3 text-center ">
            Have an amazing business meeting
            <span className="block md:text-2xl sm:text-xl text-lg pt-5 text-center">
              Small business with big dreams
            </span>
          </p>
          <button className="main border-2 border-white rounded-full px-10 text-xl py-2 ">
            Learn More
          </button>
        </div>
      </div>

      <div className="flex flex-wrap  md:pt-40 sm:pt-20 pt-10  sm:pr-0 pr-5">
        <div className="md:pl-56 md:pt-20 sm:pl-20 pl-10">
          <img src="./images/text.png" alt="text" />
        </div>
        <div
          className="md:pt-20 md:pl-36 sm:pl-20 sm:pt-20
        pl-10 pt-10
        "
        >
          <div className="flex mb-10">
            <div>
              <img src="./images/download (2).png" alt="" className="pt-3" />
            </div>
            <div className="max-w-[40rem] text-lg ml-5">
              <p>Web Design</p>
              <span>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minum veniaml.
              </span>
            </div>
          </div>
          <div className="flex mb-10">
            <div>
              <img src="./images/download (4).png" alt="" className="pt-3" />
            </div>
            <div className="max-w-[40rem] text-lg ml-5">
              <p>Web Design</p>
              <span>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minum veniaml.
              </span>
            </div>
          </div>
          <div className="flex mb-10">
            <div>
              <img src="./images/download (5).png" alt="" className="pt-3" />
            </div>
            <div className="max-w-[40rem] text-lg ml-5">
              <p>Web Design</p>
              <span>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minum veniaml.
              </span>
            </div>
          </div>
          <div className="flex mb-10">
            <div>
              <img src="./images/download (6).png" alt="" className="pt-3" />
            </div>
            <div className="max-w-[40rem] text-lg ml-5">
              <p>Web Design</p>
              <span>
                Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minum veniaml.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('./image/bg.png')] bg-cover h-[50rem]  flex flex-col flex-wrap justify-center pl-32 w-full bg-gray-200">
        <div>
          <p className="text-theme mb-10 text-4xl font-light">
            Exceptional Customer Service
          </p>
        </div>
        <div>
          <p className="w-1/2 text-lg">
            Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minum
            veniaml.
          </p>
        </div>
        <div>
          <button className="main bg-theme py-2 px-4 text-white mt-10 text-xl">
            Need to help? Lets Chat
          </button>
        </div>
      </div>
      <div className="h-2/3">
        <div className="flex justify-center ">
          <section>
            <p className=" text-5xl pt-10 text-center">Our Portfolio</p>
            <p className="pt-6">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed eiusmod
            </p>
          </section>
        </div>
        <div className="flex gap-x-5 justify-center mt-16 font-light">
          <button className="bg-theme border-2 border-black px-2 text-2xl text-white">
            ALL
          </button>
          <button className="hover:bg-theme border-2 border-black hover:text-white px-2 text-2xl">
            WEB
          </button>
          <button className="hover:bg-theme border-2 border-black hover:text-white px-2 text-2xl">
            UI/UX
          </button>
          <button className="hover:bg-theme border-2 border-black px-2 hover:text-white text-2xl">
            PHOTOGRAPHY
          </button>
          <button className="hover:bg-theme border-2 border-black px-2 hover:text-white text-2xl">
            BRANDING
          </button>
        </div>
        <div className=" flex  justify-center mt-10 ">
          <div className="scale w-80 h-80 overflow-hidden">
            <img src="./images/gal1.png" alt="" className="object-cover" />
          </div>
          <div className="scale w-80 h-80 overflow-hidden">
            <img src="./images/gal2.png" alt="" className="object-cover" />
          </div>
          <div className="scale w-80 h-80 overflow-hidden">
            <img src="./images/gal3.png" alt="" className="object-cover" />
          </div>
          <div className="scale w-80 h-80 overflow-hidden">
            <img src="./images/gal4.png" alt="" className="object-cover" />
          </div>
        </div>
        <div className="flex justify-center mt-10 pb-20">
          <div className="scale w-80 h-80 overflow-hidden">
            <img src="./images/gal5.png" alt="" className="object-cover" />
          </div>
          <div className="scale  w-80 h-80 overflow-hidden ">
            <img src="./images/gal6.png" alt="" className="object-cover" />
          </div>
          <div className="scale w-80 h-80 overflow-hidden">
            <img src="./images/gal7.png" alt="" className="object-cover" />
          </div>
          <div className="scale w-80 h-80 overflow-hidden">
            <img src="./images/gal8.png" alt="" className="object-cover" />
          </div>
        </div>
      </div>
      {/* <div className="bg-[url('./image/back1.png')] bg-cover w-full h-96"></div> */}
    </>
  );
};

export default Home;
