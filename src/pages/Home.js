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

      <div className="bg-[url('./image/bg.png')] bg-cover h-[50rem]  flex flex-col flex-wrap justify-center sm:pl-32 pl-20 w-full bg-gray-200">
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
            <p className="pt-6 text-center">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed eiusmod
            </p>
          </section>
        </div>
        <div className="flex flex-wrap  md:gap-x-5 sm:gap-x-3 gap-x-2 justify-center mt-16 font-light">
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
          <button className="hover:bg-theme border-2 border-black px-2 hover:text-white text-2xl ">
            BRANDING
          </button>
        </div>
        <div className=" flex justify-center mt-10 md:px-5 sm:px-3 px-2 ">
          <div className="scale md:w-80 md:h-80 sm:w-60 w-56 h-56 sm:h-60 overflow-hidden ">
            <img src="./images/galery1.png" alt="" className="object-cover" />
          </div>
          <div className="scale md:w-80 md:h-80 sm:w-60 sm:h-60 overflow-hidden w-56 h-56">
            <img src="./images/gal2.png" alt="" className="object-cover" />
          </div>
          <div className="scale md:w-80 md:h-80 sm:w-60 sm:h-60 overflow-hidden w-56 h-56">
            <img src="./images/gal3.png" alt="" className="object-cover" />
          </div>
          <div className="scale md:w-80 md:h-80 sm:w-60 sm:h-60 overflow-hidden w-56 h-56">
            <img src="./images/gal4.png" alt="" className="object-cover" />
          </div>
        </div>
        <div className="flex justify-center md:mt-10 sm:mt-5 mt-3 md:pb-20 sm:pb-10 md:px-5 sm:px-3 px-2 ">
          <div className="scale md:w-80 md:h-80 sm:w-60 sm:h-60  overflow-hidden w-56 h-56">
            <img src="./images/gal5.png" alt="" className="object-cover" />
          </div>
          <div className="scale  md:w-80 md:h-80 sm:w-60 sm:h-60 overflow-hidden w-56 h-56">
            <img src="./images/gal6.png" alt="" className="object-cover" />
          </div>
          <div className="scale md:w-80 md:h-80 sm:w-60 sm:h-60overflow-hidden w-56 h-56">
            <img src="./images/gal7.png" alt="" className="object-cover" />
          </div>
          <div className="scale md:w-80 md:h-80 sm:w-60 sm:h-60 overflow-hidden w-56 h-56">
            <img src="./images/gal8.png" alt="" className="object-cover" />
          </div>
        </div>
      </div>
      {/* <div className="bg-[url('./image/back1.png')] bg-cover w-full text-white text-lg flex justify-evenly items-center py-32">
        <div>
          <img src="./images/download (7).png" alt="" className="px-10" />
          <p className="text-4xl font-medium px-3">3,800+</p>
          <span>Satisfied Clients</span>
        </div>
        <div>
          <img src="./images/download (8).png" alt="" className="px-10" />
          <p className="text-4xl font-medium px-3">4,510+</p>
          <span>Projects Completed</span>
        </div>
        <div>
          <img src="./images/download (9).png" alt="" className="px-10" />
          <p className="text-4xl font-medium px-3">2,800+</p>
          <span>Positive Feedbacks</span>
        </div>
        <div>
          <img src="./images/download (10).png" alt="" className="px-10" />
          <p className="text-4xl font-medium px-3">5,500+</p>
          <span>Freebies Released</span>
        </div>
      </div> */}
    </>
  );
};

export default Home;
