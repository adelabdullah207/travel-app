import React, {useRef } from "react";
import cities from "../utils/data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLocationArrow } from "react-icons/fa6";
import { GrNext } from "react-icons/gr";
import { motion } from "framer-motion";

export default function Main() {
  const ref = useRef(null);
  const handleNextSlide = () => {
    ref.current.slickNext();
  };

  const handlePrevSlide = () => {
    ref.current.slickPrev();
  };

  return (
    <div className="container w-70% m-auto overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-12 pb-3 mx-3"
      >
        <h1 className="capitalize text-4xl">best destinations</h1>
        <div className="flex justify-end gap-2.5">
          <GrNext
            onClick={handlePrevSlide}
            size={30}
            className="cursor-pointer rotate-180 bg-gradient-to-bl from-cyan-300 to-cyan-500 text-white p-2 rounded-full"
          />
          <GrNext
            size={30}
            onClick={handleNextSlide}
            className="cursor-pointer bg-gradient-to-bl from-cyan-300 to-cyan-500 text-white p-2 rounded-full"
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="slider-container"
      >
        <Slider
          ref={ref}
          speed={500}
          slidesToShow={3}
          slidesToScroll={1}
          responsive={[
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 728,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ]}
        >
          {cities.map((city, idx) => (
            <div
              key={idx}
              className="p-2 w-full hover:scale-95 duration-150 transition-all"
            >
              <img
                src={city.img_url}
                title={city.title}
                loading="lazy"
                alt={city.name}
                className="rounded-md w-full h-full"
              />
              <p className="flex items-center gap-1.5 capitalize">
                <FaLocationArrow size={20} />
                {city.continent}
              </p>
              <h1 className="bg-white capitalize">{city.name}</h1>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
}
