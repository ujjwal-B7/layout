import React from "react";

import { useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();
  if (pathname === "/service") return null;
  if (pathname === "/portfolio") return null;
  if (pathname === "/contact") return null;

  return (
    <>
      <div className="bg-foot w-full text-white flex flex-col justify-center items-center ">
        <div>
          <p className="text-4xl py-16">Contact</p>
        </div>
        <div>
          <p className="text-center">
            Lorem ipsum dolor sit amet,consectrtur adipiscing elit,sed do
            eiusmod tempor
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-y-10 mt-20">
          <div className="md:px-32 ">
            <p className="text-3xl  mx-2">Leave a message</p>
            <form action="" className="flex flex-col   ">
              <input
                type="text"
                name=""
                id="name"
                placeholder="Full Name"
                className="sm:w-96 w-80 mx-2 h-14 my-5 bg-transparent border-2 border-gray-500"
              />
              <input
                type="email"
                name=""
                id="email"
                placeholder="Email"
                className="sm:w-96 w-80 mx-2 h-14 my-5 bg-transparent border-2 border-gray-500"
              />
              <input
                type="text"
                name=""
                id="subject"
                placeholder="Subject"
                className="sm:w-96 w-80 mx-2 h-14 my-5 bg-transparent border-2 border-gray-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="sm:w-96 w-80 h-24 my-5 mx-2 bg-transparent border-2 border-gray-500"
              ></textarea>
              <button className="h-14 w-32  hover:opacity-90 bg-theme border border-white mb-14  mx-2">
                Send
              </button>
            </form>
          </div>
          <div className="md:px-32 px-7">
            <p className="text-2xl">Address</p>
            <div className="flex gap-x-10 py-5">
              <div>
                <img src="./images/foot1.png" alt="" />
              </div>
              <p>
                69/A,Road 3,Mohammadia Housing Ltd <br />
                Dhaka-1207
              </p>
            </div>
            <div className="flex gap-x-10 py-5">
              <div>
                <img src="./images/foot2.png" alt="" />
              </div>
              <p>
                +8801750727522 <br />
                +8801630742521
              </p>
            </div>
            <div className="flex gap-x-10 py-5">
              <img src="./images/foot3.png" alt="" />
              <p>muslimmahin@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="h-20 w-full border border-gray-500 flex flex-wrap sm:justify-around  justify-center items-center">
          <div className="text-[#555] px-5">
            <p>Created By @ Ujjwal Basnet 2023</p>
          </div>
          <div className="flex gap-x-7 px-5">
            <div className="logo">
              <img src="./images/fb.png" alt="" />
            </div>
            <div className="logo">
              <img src="./images/web.png" alt="" />
            </div>
            <div className="logo">
              <img src="./images/twitt.png" alt="" />
            </div>
            <div className="logo">
              <img src="./images/google.png" alt="" />
            </div>
            <div className="logo">
              <img src="./images/be.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
