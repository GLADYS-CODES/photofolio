import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";
import { Pagination, Navigation } from "swiper";

import testimonialImage from "../assets/testimonials-2.jpg";

export default function Testimonial() {
  return (
    <div className="bg-black py-10">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <img
                src={testimonialImage}
                alt="Testimonial"
                className="w-32 h-32 rounded-full"
              />
              <p className="text-white text-center mt-4">
                <span className="text-yellow-500 text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
                <br />
                "Absolutely stunning photography! The attention to detail and
                composition in each shot is remarkable. I couldn't be happier
                with the results. Highly recommended!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <img
                src={testimonialImage}
                alt="Testimonial"
                className="w-32 h-32 rounded-full"
              />
              <p className="text-white text-center mt-4">
                <span className="text-yellow-500 text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
                <br />
                "Working with this photographer was an incredible experience.
                Their ability to capture emotions and moments is unparalleled.
                I am beyond impressed with their skills and professionalism.
                Highly recommended!"
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col items-center justify-center">
              <img
                src={testimonialImage}
                alt="Testimonial"
                className="w-32 h-32 rounded-full"
              />
              <p className="text-white text-center mt-4">
                <span className="text-yellow-500 text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
                <br />
                "The photographs speak for themselves - pure artistry. The
                level of creativity and storytelling is truly exceptional. I
                couldn't be happier with the outcome. Highly recommend this
                photographer for any occasion!"
              </p>
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components for additional testimonials */}
        </Swiper>
      </div>
    </div>
  );
}
