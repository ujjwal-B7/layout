import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { array } from "../components/Gallery";
const Home = () => {
  const [image, setImage] = useState(array);

  const sortImage = (e) => {
    if (e === "all") {
      setImage(array);
    } else {
      const res = array.filter((i) => i.category === e);
      setImage(res);
    }
  };
  return (
    <>
      <div
        className="content lg:h-screen sm:h-[55rem] h-[40rem] bg-cover text-white w-full bg-[url('./image/background.png')]"
        // data-aos="slide-up"
      >
        <div
          className="flex flex-col gap-y-24  items-center pt-72"
          data-aos="slide-up"
        >
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

      <div className="flex flex-wrap  lg:pt-20  sm:pr-0 pr-5">
        <div className="md:pl-56 md:pt-20 sm:pl-20 pl-10">
          <img src="./images/text.png" alt="text" />
        </div>
        <div
          className="md:pt-20 md:pl-36 sm:pl-20 sm:pt-20
        pl-10 pt-10 sm:mb-20
        "
        >
          <div className="flex mb-10">
            <div>
              <img
                src="./images/download (2).png"
                alt=""
                className="w-10 pt-3"
              />
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
              <img
                src="./images/download (4).png"
                alt=""
                className=" w-10 pt-3"
              />
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
              <img
                src="./images/download (5).png"
                alt=""
                className=" w-10 pt-3"
              />
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
              <img
                src="./images/download (6).png"
                alt=""
                className=" w-10 pt-3"
              />
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

      <div className="bg-[url('./image/bg.png')] bg-cover lg:py-40 py-16 flex flex-col flex-wrap justify-center sm:pl-32 pl-14 w-full bg-gray-200">
        <div>
          <p className="text-theme mb-10 text-4xl font-light">
            Exceptional Customer Service
          </p>
        </div>
        <div>
          <p className="md:w-1/2 text-lg">
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
      <div className=" bg-gray-200">
        <div className="flex justify-center ">
          <section>
            <p className=" text-5xl pt-10 text-center">Our Portfolio</p>
            <p className="pt-6 text-center">
              Lorem ipsum dolor sit amet,consectetur adipiscing elit,sed eiusmod
            </p>
          </section>
        </div>
        <div className="flex flex-wrap  md:gap-x-5 sm:gap-x-3 gap-x-2 justify-center mt-16 font-light ">
          <button
            className="bg-theme border-2 border-black px-2 text-2xl text-white mt-3"
            onClick={() => sortImage("all")}
          >
            ALL
          </button>
          <button
            className="hover:bg-theme border-2 border-black hover:text-white px-2 text-2xl mt-3"
            onClick={() => sortImage("web")}
          >
            WEB
          </button>
          <button
            className="hover:bg-theme border-2 border-black hover:text-white px-2 text-2xl mt-3"
            onClick={() => sortImage("ui/ux")}
          >
            UI/UX
          </button>
          <button
            className="hover:bg-theme border-2 border-black px-2 hover:text-white text-2xl mt-3"
            onClick={() => sortImage("photography")}
          >
            PHOTOGRAPHY
          </button>
          <button
            className="hover:bg-theme border-2 border-black px-2 hover:text-white text-2xl mt-3"
            onClick={() => sortImage("branding")}
          >
            BRANDING
          </button>
        </div>
        <div className="max-w-screen-xl mx-auto grid place-items-center lg:grid-cols-4 md:grid-cols-3 px-2 grid-cols-2 md:py-10 sm:py-7 py-5 gap-6 ">
          {image.map((img) => (
            <div className="scale h-auto overflow-hidden relative">
              <img
                src={img.url}
                alt=""
                className=" mx-auto"
                data-aos="zoom-in"
              />
              <div className="open hover:bg-theme hover:text-white hidden absolute bg-white w-14 h-14 rounded-full px-3 py-3 top-40 right-28 text-3xl">
                <a href="#">
                  <ion-icon name="image-outline"></ion-icon>
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="flex justify-center md:mt-10 sm:mt-7 mt-5 px-4 gap-x-2 md:pb-20 sm:pb-10 pb-7">
          <div className="scale md:w-72 sm:w-60 w-52 h-auto overflow-hidden relative">
            <img src="./images/gal5.png" alt="" className=" mx-auto" />
            <div className="open hover:bg-theme hover:text-white hidden absolute bg-white w-14 h-14 rounded-full px-3 py-3 top-40 right-28 text-3xl">
              <a href="#">
                <ion-icon name="image-outline"></ion-icon>
              </a>
            </div>
          </div>
          <div className="scale md:w-72 sm:w-60 w-52 h-auto overflow-hidden relative">
            <img src="./images/gal6.png" alt="" className=" mx-auto" />
            <div className="open hover:bg-theme hover:text-white hidden absolute bg-white w-14 h-14 rounded-full px-3 py-3 top-40 right-28 text-3xl">
              <a href="#">
                <ion-icon name="image-outline"></ion-icon>
              </a>
            </div>
          </div>
          <div className="scale md:w-72 sm:w-60 w-52 h-auto overflow-hidden relative">
            <img src="./images/gal7.png" alt="" className=" mx-auto" />
            <div className="open hover:bg-theme hover:text-white hidden absolute bg-white w-14 h-14 rounded-full px-3 py-3 top-40 right-28 text-3xl">
              <a href="#">
                <ion-icon name="image-outline"></ion-icon>
              </a>
            </div>
          </div>
          <div className="scale md:w-72 sm:w-60 w-52 h-auto overflow-hidden relative">
            <img src="./images/gal8.png" alt="" className=" mx-auto" />
            <div className="open hover:bg-theme hover:text-white hidden absolute bg-white w-14 h-14 rounded-full px-3 py-3 top-40 right-28 text-3xl">
              <a href="#">
                <ion-icon name="image-outline"></ion-icon>
              </a>
            </div>
          </div>
        </div> */}
      </div>

      <div className="bg-[url('./image/back1.png')] bg-cover w-full text-white text-lg flex flex-wrap sm:justify-evenly justify-center items-center py-32 ">
        <div className="px-10  sm:py-5 py-12">
          <img src="./images/download (7).png" alt="" className="px-10" />
          <p className="text-4xl font-medium px-3 py-3">3,800+</p>
          <span>Satisfied Clients</span>
        </div>
        <div className="px-10 sm:py-5 py-12">
          <img src="./images/download (8).png" alt="" className="px-10" />
          <p className="text-4xl font-medium px-3 py-3">4,510+</p>
          <span>Projects Completed</span>
        </div>
        <div className="px-10 sm:py-5 py-12">
          <img src="./images/download (9).png" alt="" className="px-10" />
          <p className="text-4xl font-medium px-3 py-3">2,800+</p>
          <span>Positive Feedbacks</span>
        </div>
        <div className="px-10 sm:py-5 py-12">
          <img src="./images/download (10).png" alt="" className="px-10" />
          <p className="text-4xl font-medium px-3 py-3">5,500+</p>
          <span>Freebies Released</span>
        </div>
      </div>
    </>
  );
};

export default Home;
