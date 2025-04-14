import React from "react";
import video from "/footer-video.mp4";
import partner_one from "/partners/trivago-logo.png";
import partner_two from "/partners/booking.webp";
import partner_three from "/partners/airbnb.png";
import "../styles/footer.css";
import { BiMailSend } from "react-icons/bi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
import { Link, Element } from "react-scroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="main mt-12">
      <video autoPlay muted loop src={video}></video>

      <div className="content">
        <h2 className="lg:text-2xl md:text-xl text-md capitalize">
          keep in touch
        </h2>
        <h1 className="lg:text-5xl md:text-3xl text-2xl capitalize">
          travel with us
        </h1>
        <input
          type="email"
          placeholder="enter your email"
          className=" text-sm md:w-[50%] w-[90%] backdrop-blur-2xl my-1.5 p-2 border-2 rounded-full  outline-none focus:border-white"
        />
        <button className="text-md md:w-[50%] w-[90%] mb-6 text-white p-2  rounded-full bg-gradient-to-bl from-cyan-800 to-cyan-300 uppercase cursor-pointer flex justify-center items-center gap-1.5">
          send <BiMailSend size={25} />
        </button>

        <div className="md:w-[50%] bg-white w-[90%] rounded-lg pt-2">
          {/* logo */}
          <div className="px-5">
            <Link to="nav" smooth={true} duration={500}>
              <span className="flex items-center text-black hover:translate-x-1.5 transition-all duration-200">
                <MdOutlineTravelExplore size={30} />
                <h1 className="capitalize  lg:text-2xl md:text-xl text-md font-bold cursor-pointer ">
                  travel.
                </h1>
              </span>
            </Link>
          </div>
          {/*  */}
          <p className="text-black pt-4 px-5 text-sm">
            Welcome to Travel, your ultimate travel companion! We are passionate
            explorers committed to helping you discover the world's most
            exciting destinations, hidden gems, and unforgettable experiences.
            Whether you're planning a relaxing beach getaway, an adventurous
            trek, or a cultural escape, we've got you covered with expert tips,
            in-depth guides, and personalized recommendations. Join us as we
            embark on a journey to make travel easier, more enjoyable, and
            accessible for everyone. Let’s create memories that last a lifetime!
          </p>
          {/* social media section */}
          <div className="flex gap-2  text-black pt-4 px-5 mb-5">
            <FaFacebook
              size={25}
              className="cursor-pointer hover:translate-y-1.5 transition-all duration-200"
              title="facebook"
            />
            <FaInstagram
              size={25}
              className="cursor-pointer hover:translate-y-1.5 transition-all duration-200"
              title="instagram"
            />
            <FaYoutube
              size={25}
              className="cursor-pointer hover:translate-y-1.5 transition-all duration-200"
              title="youtube"
            />
          </div>
          {/* end of social media section */}
          <p className="w-full capitalize bg-cyan-500  text-center p-1 rounded-b-md">
            all &copy; copy rights received{" " + currentYear}
          </p>
        </div>
      </div>
      {/* partners section */}
      <div className="relative flex flex-col justify-center items-center my-6">
        <h1 className="capitalize text-2xl">our partners</h1>
        <div className="flex md:flex-row flex-col">
          <a href="https://www.trivago.com/">
            <img src={partner_one} title="trivago" className="w-72 " />
          </a>
          <a href="https://www.booking.com/">
            <img src={partner_three} title="airbnb" className="w-72 " />
          </a>
          <a href="https://www.airbnb.com/">
            <img src={partner_two} title="booking" className="w-72 " />
          </a>
        </div>
        <span className="absolute bottom-3.5 right-3.5">
          <Link to="nav" smooth={true} duration={500}>
            <FaChevronCircleUp
              size={30}
              className="cursor-pointer hover:scale-105 transition-all duration-150  text-cyan-600"
            />
          </Link>
        </span>
      </div>
      {/* end of partners section */}
    </div>
  );
}
