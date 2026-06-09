import main_padding from "@/style/padding";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

const SectionWrapper = ({
  children,
  className,
  classNameTop,
  id,
}: {
  children: ReactNode;
  className?: string;
  style?: any;
  classNameTop?: string;
  id?: string;
}) => {
  return (
    <section
      id={id}
      className={twMerge(
        `w-full  flex items-center  justify-center relative z-0 overflow-hidden  ${
          id !== "footer" && main_padding.y
        }`,
        classNameTop
      )}
    >
      <div
        className={twMerge(
          "max-xl:max-w-[1440px] mx-auto  w-full main_padding_x  ",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
