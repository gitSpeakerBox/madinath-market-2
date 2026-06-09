"use client";
import { NavLinks } from "@/libs/contents/NavLinks";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/libs/contents/Logo";
import { useEffect, useState } from "react";

const HeroNavV2 = ({
  className,
}: {
  className?: string;
}) => {
  type SubLink = {
    title: string;
    href: string;
  };
  const [menuBar, setMenuBar] = useState(false);
  
  useEffect(() => {
    const toggleMenu = () => {
      if (menuBar) {
        const body = document.body;
        body.classList.add("overflow-hidden");
      } else {
        const body = document.body;
        body.classList.remove("overflow-hidden");
      }
    };
    toggleMenu();

    return () => {
      const body = document.body;
      body.classList.remove("overflow-hidden");
    };
  }, [menuBar]);

  return (
    <>
      <nav
        className={`bg-white text-black py-4 absolute top-0 left-0 flex items-center justify-between px-6 lg:px-16 z-50 w-full shadow-sm ${className} max-lg:hidden`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Logo className="w-[140px] h-auto" />
          </Link>
        </div>

        {/* Links */}
        <div className="flex items-center gap-8">
          {NavLinks.map((val, idx) =>
            val.subLinks ? (
              <div
                className="font-medium group relative text-sm capitalize outline-none bg-transparent py-2 px-1 text-gray-800 duration-300 cursor-pointer"
                key={val.href}
              >
                <Link href={val.href} className="hover:text-[#D32133] transition-colors">
                  {val.title}
                </Link>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`absolute z-50 flex-col p-4 hidden group-hover:flex duration-300 gap-3 rounded bg-white text-black shadow-lg top-10 -left-4 min-w-[150px]`}
                >
                  {val.subLinks.map((subLink: SubLink) => (
                    <Link
                      key={subLink.href}
                      href={subLink.href}
                      className="py-1 px-2 hover:text-[#D32133] duration-300 block text-sm"
                    >
                      {subLink.title}
                    </Link>
                  ))}
                </motion.div>
                <div className="absolute top-8 left-0 h-4 w-full bg-transparent" />
              </div>
            ) : (
              <Link
                className="font-medium text-[15px] capitalize outline-none bg-transparent py-2 px-1 text-gray-800 hover:text-[#D32133] duration-300"
                key={val.href}
                href={val.href}
              >
                {val.title}
              </Link>
            )
          )}
        </div>

        {/* Button */}
        <div className="flex items-center">
          <Link href="/contact">
            <button className="bg-[#D32133] hover:bg-red-700 text-white font-medium py-2 px-6 rounded-[16px] transition-colors duration-300 text-[14px]">
              Contact Us
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Nav */}
      <motion.nav
        className={`py-4 ${className} ${
          menuBar ? "" : "px-5"
        } absolute flex items-center lg:hidden justify-between z-50 w-full bg-white top-0 shadow-sm`}
      >
        <Link href="/">
          <Logo className="w-[120px] h-auto" />
        </Link>

        <svg
          onClick={() => setMenuBar(!menuBar)}
          className="lg:hidden cursor-pointer"
          width="27"
          height="28"
          viewBox="0 0 27 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 26.5C16.8152 26.5 19.9946 25.183 22.3388 22.8388C24.683 20.4946 26 17.3152 26 14C26 10.6848 24.683 7.50537 22.3388 5.16117C19.9946 2.81696 16.8152 1.5 13.5 1.5C10.1848 1.5 7.00537 2.81696 4.66117 5.16117C2.31696 7.50537 1 10.6848 1 14C1 17.3152 2.31696 20.4946 4.66117 22.8388C7.00537 25.183 10.1848 26.5 13.5 26.5Z"
            stroke="#D32133"
            strokeWidth="1.71429"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.73077 14.4808C7.60326 14.4808 7.48098 14.4302 7.39081 14.34C7.30065 14.2499 7.25 14.1276 7.25 14.0001C7.25 13.8725 7.30065 13.7503 7.39081 13.6601C7.48098 13.5699 7.60326 13.5193 7.73077 13.5193M7.73077 14.4808C7.85828 14.4808 7.98056 14.4302 8.07072 14.34C8.16089 14.2499 8.21154 14.1276 8.21154 14.0001C8.21154 13.8725 8.16089 13.7503 8.07072 13.6601C7.98056 13.5699 7.85828 13.5193 7.73077 13.5193M13.5 14.4808C13.3725 14.4808 13.2502 14.4302 13.16 14.34C13.0699 14.2499 13.0192 14.1276 13.0192 14.0001C13.0192 13.8725 13.0699 13.7503 13.16 13.6601C13.2502 13.5699 13.3725 13.5193 13.5 13.5193M13.5 14.4808C13.6275 14.4808 13.7498 14.4302 13.84 14.34C13.9301 14.2499 13.9808 14.1276 13.9808 14.0001C13.9808 13.8725 13.9301 13.7503 13.84 13.6601C13.7498 13.5699 13.6275 13.5193 13.5 13.5193M19.2692 14.4808C19.1417 14.4808 19.0194 14.4302 18.9293 14.34C18.8391 14.2499 18.7885 14.1276 18.7885 14.0001C18.7885 13.8725 18.8391 13.7503 18.9293 13.6601C19.0194 13.5699 19.1417 13.5193 19.2692 13.5193M19.2692 14.4808C19.3967 14.4808 19.519 14.4302 19.6092 14.34C19.6993 14.2499 19.75 14.1276 19.75 14.0001C19.75 13.8725 19.6993 13.7503 19.6092 13.6601C19.519 13.5699 19.3967 13.5193 19.2692 13.5193"
            stroke="#449A46"
            strokeWidth="1.71429"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {menuBar && <MobileMenuBar menuBar={menuBar} setMenuBar={setMenuBar} />}
      </motion.nav>
    </>
  );
};

export default HeroNavV2;

const MobileMenuBar = ({
  menuBar,
  setMenuBar,
}: {
  menuBar: boolean;
  setMenuBar: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute min-h-svh xl:hidden overflow-y-scroll h-full flex flex-col bg-white w-screen top-0 left-0 z-[999] max-sm:pb-24 max-sm:pt-7 sm:py-10 sm:px-10 gap-[30px]"
    >
      <div className="flex justify-between w-full items-center max-sm:px-5">
        <Logo className="w-[120px] h-auto" />
        <svg
          onClick={() => setMenuBar(!menuBar)}
          className="w-8 h-8 sm:w-[30px] sm:h-[30px] cursor-pointer"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.41016 2.83154L27.4102 27.8315"
            stroke="#D32133"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M2.41016 27.8315L27.4102 2.83154"
            stroke="#D32133"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <ul className="flex flex-col items-start mx-auto gap-[40px] my-10 sm:my-4 text-black h-full justify-start w-full px-6">
        {NavLinks.map((val, idx) =>
          val.subLinks ? (
            <div
              className="font-medium text-lg capitalize outline-none flex flex-col gap-4 bg-transparent w-full"
              key={val.href}
            >
              <Link 
                href={val.href} 
                className="mt-1 font-bold text-gray-800"
                onClick={() => setMenuBar(false)}
              >
                {val.title}
              </Link>
              <div className="flex flex-col gap-3 pl-4 border-l-2 border-gray-200 w-full">
                {val.subLinks.map((subLink) => (
                  <Link
                    className="font-medium text-[#D32133] text-base capitalize outline-none bg-transparent block"
                    key={subLink.href}
                    href={subLink.href}
                    onClick={() => setMenuBar(false)}
                  >
                    {subLink.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              className="font-bold text-lg capitalize outline-none bg-transparent text-gray-800"
              key={val.href}
              href={val.href}
              onClick={() => setMenuBar(false)}
            >
              {val.title}
            </Link>
          )
        )}
      </ul>
    </motion.div>
  );
};
