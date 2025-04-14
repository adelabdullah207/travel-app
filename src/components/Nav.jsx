import React, { useEffect, useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import { Element } from "react-scroll";
import { motion } from "framer-motion";
export default function Nav() {
  const [mobileNavIcon, setMobileNavIcon] = useState(false);
  return (
    <section className=" w-full bg-white">
      <div className="shadow-2xl">
        <div className="container w-[90%] m-auto ">
          <Element name="nav">
            <header className="flex justify-between items-center py-3">
              {/* right section */}
              <div>
                <a className="text-blue-700 flex items-center" href="">
                  <MdOutlineTravelExplore size={30} />
                  <h1 className="capitalize  text-2xl font-bold">travel.</h1>
                </a>
              </div>
              {/* left section */}
              <div>
                <ul className="md:flex items-center gap-3 hidden capitalize">
                  <li className="hover:text-gray-500 transition-all duration-150">
                    <a href="#home">home</a>
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-150">
                    <a href="#packages">packages</a>
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-150">
                    <a href="#shop">shop</a>
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-150">
                    <a href="#about">about</a>
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-150">
                    <a href="#news">news</a>
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-150">
                    <a href="#contact">contact</a>
                  </li>
                  <li className="hover:text-gray-500 transition-all duration-150">
                    <button className="text-white p-3 rounded-full bg-gradient-to-bl from-cyan-800 to-cyan-300 uppercase cursor-pointer hover:translate-x-2 transition-all duration-300">
                      book now
                    </button>
                  </li>
                </ul>
              </div>
              {/* mobile nav */}
              <button
                onClick={() => setMobileNavIcon(!mobileNavIcon)}
                className="md:hidden cursor-pointer"
              >
                <TbGridDots size={30} />
              </button>
              {/* open */}

              {mobileNavIcon && (
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="md:hidden absolute z-40 top-10 left-0 bg-white w-full flex justify-center text-center flex-col"
                >
                  <li className="border-b-1 py-3">
                    <a href="">home</a>
                  </li>
                  <li className="border-b-1 py-3">
                    <a href="">packages</a>
                  </li>
                  <li className="border-b-1 py-3">
                    <a href="">shop</a>
                  </li>
                  <li className="border-b-1 py-3">
                    <a href="">about</a>
                  </li>
                  <li className="border-b-1 py-3">
                    <a href="">news</a>
                  </li>
                  <li className="border-b-1 py-3">
                    <a href="">contact</a>
                  </li>
                  <li className="py-3">
                    <button className="text-white p-3 rounded-full bg-gradient-to-bl from-cyan-800 to-cyan-300 uppercase cursor-pointer">
                      book now
                    </button>
                  </li>
                </motion.ul>
              )}

              {/* end of mobile nav */}
            </header>
          </Element>
        </div>
      </div>
    </section>
  );
}
