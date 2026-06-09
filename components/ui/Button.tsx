import React from "react";
import Link from "next/link";

const Button = ({
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
      className={`lg:bg-mm-red bg-mm-green text-white  z-10 p-0 rounded-[5px]  ${classNameTop}`}
    >
      <button
        className={`btn btn_animation max-lg:shadow[inset_0px_0px_19.9836px_rgba(0, 0, 0, 0.25)] rounded-[5px] z-20 ${className}`}
      >
        {text}
      </button>
    </Link>
  ) : (
    <div
      className={`lg:bg-mm-red bg-mm-green text-white z-10 p-0 rounded-[5px]  ${classNameTop}`}
    >
      <button
        type={text === "Submit now"||text === "SUBMIT" ? "submit" : "button"}
        className={`btn btn_animation max-lg:shadow[inset_0px_0px_19.9836px_rgba(0, 0, 0, 0.25)] rounded-[5px] z-20 ${className}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
