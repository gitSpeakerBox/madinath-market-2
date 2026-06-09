"use clint";
import React, { FormEvent, useMemo, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import feedbackBg from "@/assets/images/home/feedbackForm.png";
import feedbackBgMob from "@/assets/images/home/feedbackForm mob.png";
import feedbackLeaf from "@/assets/images/home/feedbackFormLeaf.png";
import feedbackTrolly from "@/assets/images/home/feedbackFormTrolly.png";
import feedbackTrollyMob from "@/assets/images/home/feedbackFormTrolly mob.png";
import Image from "next/image";
import Button from "../ui/Button";
import { useFormState } from "react-dom";
import { sendFeedbackForm } from "@/libs/formAction";

const FeedbackForm = () => {
  const [message, formAction] = useFormState(sendFeedbackForm, null);
  const [error, setError] = useState("");
  const [form, setForm] = useState('Submit now');
  const [pending, setPending] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  useMemo(() => {
    setFormValue({
      name: "",
      email: "",
      message: "",
    });
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formValue;
    if (!name || !email) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    setPending(true);
    try {
      const data = await formAction(new FormData(e.currentTarget));
      (e.target as HTMLFormElement).reset();  
      setForm('Submitted')
      setFormValue({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setForm('Submit now')
      }, 5000);
      setPending(false);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setPending(false);
      setFormValue({
        name: "",
        email: "",
        message: "",
      });
    }
  };
  return (
    <SectionWrapper className="flex flex-col items-center min-h-[720px] lg:min-h-[490px] justify-center text-[#fff]   lg:h-auto  ">
      <Image
        alt=""
        src={feedbackBg}
        fill
        placeholder="blur"
        blurDataURL={feedbackBg.blurDataURL}
        className=" object-cover max-lg:hidden -z-10"
      />
      <Image
        alt=""
        src={feedbackBgMob}
        fill
        placeholder="blur"
        blurDataURL={feedbackBgMob.blurDataURL}
        className=" object-cover lg:hidden -z-10"
      />
      <Image
        alt=""
        src={feedbackLeaf}
        placeholder="blur"
        blurDataURL={feedbackLeaf.blurDataURL}
        className=" object-cover absolute left-0 bottom-0 z-50 lg:w-[300.9px] lg:h-[350.87px] w-[174.05px] h-[209.38px]"
      />
      <Image
        alt=""
        src={feedbackTrolly}
        placeholder="blur"
        blurDataURL={feedbackTrolly.blurDataURL}
        className=" object-cover lg:w-[695px] w-[274px] h-[182px] mx-auto top-5 lg:right-1 lg:h-[460px] absolute  -z-10"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 lg:px-9 sm:px-12 px-[30px] bg-gradient-to-t from-[#951421] to-[#D32133] max-lg:items-center  rounded-[30px] lg:w-[85%] sm:w-[79%] w-[90%] py-10 lg:pt-8 lg:pb-12"
      >
        <h1 className="lg:text-xl text-lg leading-[140%] font-semibold">
          FEEDBACK FORM
        </h1>
        <div className="flex max-lg:flex-col z-[999] gap-6 w-full">
          <Input
            className="w-full"
            id="name"
            label="First Name*"
            name="name"
            required={true}
            type="text"
            key={"name"}
            labelClass=""
            onChange={handleChange}
          />
          <Input
            className="w-full"
            id="email"
            label="Email*"
            name="email"
            required={true}
            type="email"
            key={"email"}
            labelClass=""
            onChange={handleChange}
          />
          <Input
            className="w-full"
            id="message"
            label="Your Comment*"
            name="message"
            required={false}
            type="text"
            key={"message"}
            labelClass=""
            onChange={handleChange}
          />
          <Button
            link=""
            text={`${form}`}
            className="capitalize max-lg:w-full text-sm lg:py-[6px] py-[10px] px-4 font-medium tracking-[5%] relative w-max h-full text-center"
            classNameTop="py-0 border max-lg:w-full border-white "
          />
        </div>
        <div className="bg-transparent" />
      </form>
    </SectionWrapper>
  );
};

const Input = ({
  className,
  type,
  name,
  id,
  label,
  required,
  labelClass,
  onChange,
}: {
  className: string;
  type: string;
  name: string;
  id: string;
  label: string;
  required: boolean;
  labelClass: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={`relative z-0 group   ${className}`}>
      <input
        type={type}
        name={name}
        id={id}
        className={`block py-2.5 px-2 text-black rounded w-full text-xs sm:text-sm  placeholder-mm-red
         bg-white border-0 border-b-2  appearance-none  focus:outline-none peer ${className}`}
        placeholder={label}
        required={required}
        onChange={onChange}
      />
      {/* <label
        className={` max-sm:text-sm z[999] duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6  ${labelClass}`}
      >
        {label}
      </label> */}
    </div>
  );
};

export default FeedbackForm;
