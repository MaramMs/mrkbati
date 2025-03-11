"use client";
import React from "react";
import Image from "next/image";
function Header() {
  return (
    <header className="mt-[50px]">
      <div className="flex flex-col items-center justify-center text-center ">
        <h1 className="!font-bold  !text-[#1D1E25] md:!mb-[35px] md:text-[80px] text-[20px] !mb-[20px]">
          <span className="font-bold text-[#32A8C9] text-[20px] md:text-[80px]">
            ثورة رقمية لقطاع النقل
          </span>
          <br />
          في الوطن العربي والشرق الأوسط
        </h1>
        <p className="text-[#1D1E25] text-[14px]  md:text-[20px] font-normal text-center md:w-[40%] md:mx-auto md:!mb-[40px]">
          منصة مركبتي هي أول منصة رقمية متكاملة لحوسبة قطاع النقل والمواصلات.
          وتقديم خدمات متطورة تسهل حياة السائقين وتعزز كفاءة إدارة النقل.
        </p>
        <div className=" flex justify-center items-center gap-[28px]  m-auto">
          <a
            href="#"
            className="bg-[#1D1E25] py-[10px] px-[22px] rounded-[8px]  border border-[#808D9E]"
          >
            <Image
              src="/assets/appStore.svg"
              alt="وصف الصورة"
              width={155}
              height={39}
              layout="intrinsic"
              objectFit="contain"
            />
          </a>
          <a
            href="#"
            className="bg-[#1D1E25] py-[10px] px-[22px] rounded-[8px]  border border-[#808D9E]"
          >
            <Image
              src="/assets/googleStore.svg"
              alt="وصف الصورة"
              width={155}
              height={39}
              layout="intrinsic"
              objectFit="contain"
            />
          </a>
        </div>
      </div>
      <div className="flex justify-center items-start">
        <Image
          src="/assets/hero.png"
          width={1139}
          height={1147}
          alt="hero image"
        />
      </div>
    </header>
  );
}

export default Header;
