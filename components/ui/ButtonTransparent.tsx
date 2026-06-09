import Link from "next/link";
import React from "react";

const ButtonTransparent = ({
  className,
  classNameTop,
  link,
  text,
  onclick,
}: {
  className?: string;
  classNameTop?: string;
  link?: string;
  text: string;
  onclick?: () => void;
}) => {
  return link ? (
    <Link
      href={link}
      className={`bg-transparent border border-mm-green   z-10 p-0 rounded-lg w-max  ${classNameTop}`}
    >
      <button
        className={`btn btn_animation max-lg:bg-mm-green max-lg:shadow[inset_0px_0px_19.9836px_rgba(0, 0, 0, 0.25)]  lg:hover:text-white text-white lg:text-mm-green font-medium tracking-[5%] relative  text-base rounded-[5px] py-[7px] px-4 capitalize z-20  ${className}`}
      >
        {text}
      </button>
    </Link>
  ) : (
    <div
      className={`bg-transparent border border-mm-green  z-10 p-0 rounded-lg w-max  ${classNameTop}`}
    >
      <button
        className={`btn btn_animation max-lg:bg-mm-green  lg:hover:text-white text-white lg:text-mm-green font-medium max-lg:shadow[inset_0px_0px_19.9836px_rgba(0, 0, 0, 0.25)] tracking-[5%] relative  text-base rounded-[5px] py-[7px] px-4 capitalize z-20  ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default ButtonTransparent;
