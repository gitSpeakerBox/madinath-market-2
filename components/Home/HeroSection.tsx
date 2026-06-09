"use client";
import React, { useEffect, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import heroDay from "@/assets/images/home/Hero-section-day.jpg";
import heroDayMob from "@/assets/images/home/heroDay mob.png";
import heroNight from "@/assets/images/home/Hero-section-night.jpg";
import heroNightMob from "@/assets/images/home/heroNight mob.png";
import Image from "next/image";
import { motion } from "framer-motion";
import HeroTitle from "@/libs/contents/HeroTitle";
import HeroNav from "../ui/HeroNav";
import Button from "../ui/Button";
import Link from "next/link";

const HeroSection = () => {
  const [showNightImage, setShowNightImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowNightImage(true);
      } else {
        setShowNightImage(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <SectionWrapper className="lg:min-h-svh heroSection h-[844px] lg:h-[832px] w-full items-center flex flex-col lg:pt-0 pb-14">
      {/* Day Image */}
      <motion.div
        className={`w-screen max-lg:hidden h-full absolute top-0 left-0`}
        initial={{ opacity: 1 }}
        animate={{ opacity: showNightImage ? 0 : 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={heroDay}
          layout="fill"
          className="h-[852px]"
          objectFit="cover"
          alt="Day Image"
        />
      </motion.div>
      <motion.div
        className={`w-screen h-full lg:hidden absolute top-0 left-0`}
        initial={{ opacity: 1 }}
        animate={{ opacity: showNightImage ? 0 : 1 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={heroDayMob}
          layout="fill"
          className="min-h-[844px]"
          objectFit="cover"
          alt="Day Image"
        />
      </motion.div>

      {/* Night Image */}
      <motion.div
        className={`w-full max-lg:hidden h-full absolute top-0 left-0`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showNightImage ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={heroNight}
          layout="fill"
          className="h-[852px]"
          objectFit="cover"
          alt="Night Image"
        />
      </motion.div>
      <motion.div
        className={`w-full lg:hidden h-full absolute top-0 left-0`}
        initial={{ opacity: 0 }}
        animate={{ opacity: showNightImage ? 1 : 0 }}
        transition={{ duration: 0.7 }}
      >
        <Image
          src={heroNightMob}
          layout="fill"
          className="min-h-[844px]"
          objectFit="cover"
          alt="Night Image"
        />
      </motion.div>
      <motion.div
        whileInView={{ color: showNightImage ? "white" : "black" }}
        transition={{ duration: 0.5 }}
        className="flex max-lg:flex-col z-20 lg:gap-20 gap-10 justify-around items-center max-lg:pt-[140px]"
      >
        <HeroTitle className="max-lg:h-24 max-lg:w-[300px] " />
        <div className="flex flex-col gap-2 max-lg:gap-6">
          <p
            className={`lg:max-w-[473px] max-w-[280px] max-lg:text-center leading-[200%] max-lg:text-sm`}
          >
            At Madinath Group, customers are our top priority. We ensure Food
            Safety, Quality, Freshness and exceptional service. Our expert team
            delivers the highest quality products at the best prices.
          </p>
          <div className="flex max-lg:flex-col   gap-8 items-center">
            <div className="flex  gap-[10px] items-center">
              <p className="max-lg:text-sm">Follow Us On</p>
              <svg
                className={`${
                  showNightImage ? "text-white" : "text-black"
                }  lg:hover:translate-x-2 duration-300`}
                width="111"
                height="16"
                viewBox="0 0 111 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M110.707 8.70711C111.098 8.31658 111.098 7.68342 110.707 7.29289L104.343 0.928932C103.953 0.538408 103.319 0.538408 102.929 0.928932C102.538 1.31946 102.538 1.95262 102.929 2.34315L108.586 8L102.929 13.6569C102.538 14.0474 102.538 14.6805 102.929 15.0711C103.319 15.4616 103.953 15.4616 104.343 15.0711L110.707 8.70711ZM0 9H110V7H0V9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="flex items-center gap-6 h-12 w-max">
              <Link href="https://m.facebook.com/madinathgroup.ae">
                <svg
                  className="lg:hover:bg-white max-lg:bg-white max-lg:p-[10px] lg:hover:p-[10px] lg:hover:rounded-full max-lg:rounded-full max-lg:w-full 
                max-lg:border lg:hover:border-[1px] max-lg:border-mm-green lg:hover:border-mm-green
                 lg:hover:text-mm-red max-lg:text-mm-red  lg:w-6 lg:h-6 h-11 w-11 lg:hover:w-11 lg:hover:h-11 duration-300"
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 0C5.60833 0 0 5.60833 0 12.5C0 19.3917 5.60833 25 12.5 25C19.3917 25 25 19.3917 25 12.5C25 5.60833 19.3917 0 12.5 0ZM12.5 2.08333C18.2656 2.08333 22.9167 6.73438 22.9167 12.5C22.9192 14.9937 22.025 17.4052 20.3972 19.2944C18.7695 21.1836 16.5167 22.4245 14.05 22.7906V15.5375H17.0167L17.4823 12.524H14.05V10.8781C14.05 9.62812 14.4615 8.51667 15.6313 8.51667H17.5115V5.8875C17.1813 5.84271 16.4823 5.74583 15.1615 5.74583C12.4031 5.74583 10.7865 7.20208 10.7865 10.5208V12.524H7.95104V15.5375H10.7865V22.7646C8.35391 22.3642 6.14295 21.112 4.54864 19.2316C2.95432 17.3513 2.08051 14.9653 2.08333 12.5C2.08333 6.73438 6.73438 2.08333 12.5 2.08333Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <div
                className="group max-lg:bg-white lg:hover:bg-white lg:hover max-lg:rounded-full lg:hover:rounded-full max-lg:border-[1px] 
              lg:hover:border-[1px] max-lg:border-mm-green lg:hover:border-mm-green duration-300 "
              >
                <Link href="https://www.instagram.com/madinathgroup?igsh=ZHRpZzZlbmpwM2po">
                  <svg
                    className="lg:w-6 lg:h-6 w-11 lg:group-hover:w-11 h-11 lg:group-hover:h-11 
                   lg:hover:p-[10px] max-lg:p-[10px] max-lg:text-mm-red lg:hover:text-mm-red  duration-300"
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.175 4.325C18.8783 4.325 18.5883 4.41297 18.3416 4.5778C18.095 4.74262 17.9027 4.97689 17.7892 5.25097C17.6756 5.52506 17.6459 5.82666 17.7038 6.11764C17.7617 6.40861 17.9046 6.67588 18.1143 6.88566C18.3241 7.09544 18.5914 7.2383 18.8824 7.29618C19.1733 7.35406 19.4749 7.32435 19.749 7.21082C20.0231 7.09729 20.2574 6.90503 20.4222 6.65836C20.587 6.41168 20.675 6.12167 20.675 5.825C20.675 5.42718 20.517 5.04564 20.2357 4.76434C19.9544 4.48304 19.5728 4.325 19.175 4.325ZM24.925 7.35C24.9007 6.31287 24.7064 5.28675 24.35 4.3125C24.0322 3.47892 23.5375 2.7241 22.9 2.1C22.281 1.45928 21.5245 0.967721 20.6875 0.6625C19.7158 0.295201 18.6886 0.0965125 17.65 0.0749999C16.325 -6.70552e-08 15.9 0 12.5 0C9.1 0 8.675 -6.70552e-08 7.35 0.0749999C6.31144 0.0965125 5.28418 0.295201 4.3125 0.6625C3.4771 0.970811 2.72117 1.46195 2.1 2.1C1.45928 2.71897 0.967721 3.47555 0.6625 4.3125C0.295201 5.28418 0.0965125 6.31144 0.0749999 7.35C-6.70552e-08 8.675 0 9.1 0 12.5C0 15.9 -6.70552e-08 16.325 0.0749999 17.65C0.0965125 18.6886 0.295201 19.7158 0.6625 20.6875C0.967721 21.5245 1.45928 22.281 2.1 22.9C2.72117 23.538 3.4771 24.0292 4.3125 24.3375C5.28418 24.7048 6.31144 24.9035 7.35 24.925C8.675 25 9.1 25 12.5 25C15.9 25 16.325 25 17.65 24.925C18.6886 24.9035 19.7158 24.7048 20.6875 24.3375C21.5245 24.0323 22.281 23.5407 22.9 22.9C23.5403 22.2782 24.0354 21.5227 24.35 20.6875C24.7064 19.7132 24.9007 18.6871 24.925 17.65C24.925 16.325 25 15.9 25 12.5C25 9.1 25 8.675 24.925 7.35ZM22.675 17.5C22.6659 18.2935 22.5222 19.0796 22.25 19.825C22.0504 20.369 21.7298 20.8605 21.3125 21.2625C20.9071 21.6756 20.4165 21.9955 19.875 22.2C19.1296 22.4722 18.3435 22.6159 17.55 22.625C16.3 22.6875 15.8375 22.7 12.55 22.7C9.2625 22.7 8.8 22.7 7.55 22.625C6.72611 22.6404 5.90574 22.5136 5.125 22.25C4.60723 22.0351 4.13919 21.716 3.75 21.3125C3.33511 20.9109 3.01855 20.419 2.825 19.875C2.51982 19.1189 2.35055 18.3149 2.325 17.5C2.325 16.25 2.25 15.7875 2.25 12.5C2.25 9.2125 2.25 8.75 2.325 7.5C2.3306 6.68882 2.47869 5.88493 2.7625 5.125C2.98256 4.59739 3.32033 4.12707 3.75 3.75C4.12977 3.32021 4.59911 2.97887 5.125 2.75C5.88694 2.47505 6.69 2.33135 7.5 2.325C8.75 2.325 9.2125 2.25 12.5 2.25C15.7875 2.25 16.25 2.25 17.5 2.325C18.2935 2.3341 19.0796 2.47781 19.825 2.75C20.393 2.96082 20.9029 3.30356 21.3125 3.75C21.7221 4.13397 22.0422 4.60342 22.25 5.125C22.5278 5.88617 22.6716 6.68972 22.675 7.5C22.7375 8.75 22.75 9.2125 22.75 12.5C22.75 15.7875 22.7375 16.25 22.675 17.5ZM12.5 6.0875C11.2323 6.08997 9.9937 6.46816 8.94082 7.17427C7.88793 7.88039 7.06797 8.88275 6.58454 10.0547C6.10111 11.2266 5.9759 12.5156 6.22474 13.7587C6.47358 15.0017 7.0853 16.1432 7.98259 17.0387C8.87989 17.9343 10.0225 18.5438 11.2661 18.7902C12.5096 19.0366 13.7983 18.9089 14.9693 18.4232C16.1403 17.9375 17.1411 17.1155 17.8452 16.0613C18.5492 15.007 18.925 13.7677 18.925 12.5C18.9267 11.6564 18.7615 10.8208 18.439 10.0412C18.1166 9.26163 17.6432 8.55351 17.0461 7.95756C16.449 7.36161 15.7399 6.8896 14.9597 6.56866C14.1796 6.24773 13.3436 6.0842 12.5 6.0875ZM12.5 16.6625C11.6767 16.6625 10.872 16.4184 10.1874 15.961C9.50292 15.5036 8.9694 14.8535 8.65435 14.0929C8.3393 13.3323 8.25687 12.4954 8.41748 11.6879C8.57809 10.8805 8.97453 10.1388 9.55667 9.55667C10.1388 8.97453 10.8805 8.57809 11.6879 8.41748C12.4954 8.25687 13.3323 8.3393 14.0929 8.65435C14.8535 8.9694 15.5036 9.50292 15.961 10.1874C16.4184 10.872 16.6625 11.6767 16.6625 12.5C16.6625 13.0466 16.5548 13.5879 16.3456 14.0929C16.1365 14.5979 15.8299 15.0568 15.4433 15.4433C15.0568 15.8299 14.5979 16.1365 14.0929 16.3456C13.5879 16.5548 13.0466 16.6625 12.5 16.6625Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Button
          link="/contact"
          text="contact us"
          className="capitalize lg:hidden text-sm py-2 px-4 font-medium tracking-[5%] relative w-[300px]"
          key={"09+111"}
        />
      </motion.div>
      <HeroNav showNightImage={showNightImage} className={'max-lg:hidden'} />
    </SectionWrapper>
  );
};

export default HeroSection;
