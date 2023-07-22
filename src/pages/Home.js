import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="content md:h-screen h-[35rem]    bg-cover text-white w-full bg-[url('./image/background.png')]">
        <div className="flex flex-col gap-y-10  items-center pt-56">
          <p className=" md:text-6xl sm:text-5xl text-3xl w-2/3 text-center ">
            Have an amazing business meeting
            <span className="block md:text-2xl sm:text-xl text-lg pt-5 text-center">
              Small business with big dreams
            </span>
          </p>
          <button className="border-2 border-white rounded-full px-10 text-xl py-2 ">
            Learn More
          </button>
        </div>
      </div>
      <div className="bg-gray-500 h-96">
        <h1>hi</h1>
      </div>
    </>
  );
};

export default Home;
