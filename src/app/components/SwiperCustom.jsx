"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";
import Image from "next/image";

const SwiperCustom = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const images = [
    "/assets/slide.png",
    "/assets/slide.png",
    "/assets/slide.png",
    "/assets/slide2.jpg",
    "/assets/slide.png",
    "/assets/slide.png",
    "/assets/slide.png",
    "/assets/slide.png",
    "/assets/slide.png",
  ];

  const handlePrev = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <Swiper
          onSwiper={setSwiperInstance}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={30}
          loop={true}
          coverflowEffect={{
            rotate: 10,
            stretch: 0,
            depth: 250,
            modifier: 1,
            slideShadows: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="!flex !justify-center">
              <Image
                src={src}
                width={242}
                height={481}
                alt={`Screen ${index + 1}`}
                className="rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          onClick={handlePrev}
          className="bg-[#32A8C9] w-[36px] h-[36px] !rounded-full text-white mx-2"
        >
          {"<"}
        </button>
        <p className="text-[#32A8C9] text-[18px] font-bold m-0">
          شاشة قدوم سيارة لشحن البطارية
        </p>
        <button
          onClick={handleNext}
          className="bg-[#32A8C9] w-[36px] h-[36px] !rounded-full text-white mx-2"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default SwiperCustom;
