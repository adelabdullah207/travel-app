import React, { useState } from "react";
import "../styles/home.css";
import video from "/video-back.mp4";
import { MdLocationPin } from "react-icons/md";
import { HiFunnel } from "react-icons/hi2";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Home() {
  const [price, setPrice] = useState(100);
  return (
    <div className="main">
      <video muted autoPlay loop src={video} />
      <div className="content capitalize">
        <div className="md:w-[70%] w-[90%]">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl"
          >
            our packages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl mb-5"
          >
            search your{" "}
            <span className="lg:text-5xl md:text-3xl text-xl relative">
              holiday
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative min-h-[200px] flex justify-center items-center md:flex-row gap-5 flex-col bg-white p-5 rounded-md text-black"
          >
            <span className="flex items-center flex-col gap-3 w-full">
              <h1 className="capitalize text-xl md:text-md">
                search your destination
              </h1>
              <div className="flex items-center w-full">
                <input
                  className="bg-gray-50 rounded-full text-black p-3 w-full"
                  type="text"
                  placeholder="enter name here"
                  id="destination"
                />
                <label htmlFor="destination">
                  <MdLocationPin size={35} />
                </label>
              </div>
            </span>
            <span className="flex items-center flex-col gap-3 w-full">
              select your date
              <input
                type="date"
                placeholder="select yor date"
                className="bg-gray-50 rounded-full text-black p-3 w-full"
              />
            </span>
            <span className="flex flex-col gap-3  items-center w-full">
              <div className="flex justify-between items-center w-full">
                <p className="capitalize">max price</p>
                <p className="font-light">{price} $</p>
              </div>
              <span className="bg-gray-50 w-full p-3 rounded-full">
                <input
                  type="range"
                  max={5000}
                  min={100}
                  value={price}
                  placeholder="price"
                  className="w-full accent-blue-700 cursor-pointer"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </span>
            </span>
            {/* search filters */}
            <span className="absolute md:-bottom-5 -bottom-7">
              <button className="flex  items-center text-white p-3 rounded-full bg-gradient-to-bl from-cyan-800 to-cyan-300 uppercase cursor-pointer">
                <HiFunnel size={30} />
                search filters
              </button>
            </span>
            {/* social media section */}
            <div className="flex gap-2 absolute md:-bottom-12 -bottom-16 left-0 text-white">
              <FaFacebook
                size={30}
                className="cursor-pointer hover:translate-y-1.5 transition-all duration-150"
                title=""
              />
              <FaInstagram
                size={30}
                className="cursor-pointer hover:translate-y-1.5 transition-all duration-150"
                title=""
              />
              <FaYoutube
                size={30}
                className="cursor-pointer hover:translate-y-1.5 transition-all duration-150"
                title=""
              />
            </div>
            {/* end of social media section */}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
