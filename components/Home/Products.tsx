import React from "react";
import SectionWrapper from "../SectionWrapper";
import pageBg from "@/assets/images/home/productBg.png";
import Image from "next/image";
import { ProductsHero } from "@/libs/contents/Products";
import HeadSquare from "../ui/HeadSquare";
import Button from "../ui/Button";
import Link from "next/link";
import ButtonTransparent from "../ui/ButtonTransparent";

const Products = () => {
  return (
    <SectionWrapper className="grid lg:grid-cols-1 grid-cols-1 sm:grid-cols-2 lg:gap-20 sm:gap-12 gap-10 relative place-content-center place-items-center py-14 h-full items-center lg:min-h-[2200px]">
      <Image
        className="absolute object-cover"
        src={pageBg}
        height={2200}
        alt=""
      />
      {ProductsHero.map((val, idx) => (
        <div
          key={idx + "aa"}
          className="flex max-lg:flex-col  lg:gap-12 gap-5 items-center justify-center lg:py-5"
        >
          {idx % 2 != 0 ? (
            <Image
              className="lg:h-[300px] max-lg:hidden h-[180px] w-[300px] lg:w-[450px]"
              src={val.image}
              alt=""
            />
          ) : (
            ""
          )}
          <Image
            className="lg:hidden h-[180px] w-[300px] "
            src={val.image}
            alt=""
          />

          <div className="flex flex-col max-lg:items-center gap-5">
            <HeadSquare
              text={val.title}
              className=" text-white w-[300px] lg:w-[80%]  lg:h-[55px] h-[45px] lg:text-[22px] text-lg leading-[180%] font-semibold"
            />
            <p className="lg:max-w-[455px] text-lg leading-[30px] max-w-[350px] max-lg:text-center">
              {val.des}
            </p>
            <ButtonTransparent
              link={val.link}
              text={val.button}
              className="max-lg:w-[300px]"
            />
          </div>
          {idx % 2 != 1 ? (
            <Image
              className="lg:h-[300px] max-lg:hidden h-[180px] w-[300px] lg:w-[450px] "
              src={val.image}
              alt=""
            />
          ) : (
            ""
          )}
        </div>
      ))}
    </SectionWrapper>
  );
};

export default Products;
