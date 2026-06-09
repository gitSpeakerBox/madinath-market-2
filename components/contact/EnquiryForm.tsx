"use client";
import React, { FormEvent, useMemo, useState } from "react";
import { useFormState } from "react-dom";
import { motion } from "framer-motion";
import { sendForm } from "@/libs/formAction";

const EnquiryForm = () => {
  const [message, formAction] = useFormState(sendForm, null);
  const [error, setError] = useState("");
  const [form, setForm] = useState('SUBMIT');
  const [pending, setPending] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  useMemo(() => {
    setFormValue({
      name: "",
      email: "",
      phone: "",
      company: "",
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
    const { name, email, phone, company, message } = formValue;
    if (!name || !email || !phone) {
      setError("Please fill in all fields");
      return;
    }
    if (isNaN(Number(phone))) {
      setError("Please enter a valid number");
      return;
    }
    setError("");
    setPending(true);
    try {
      const data = await formAction(new FormData(e.currentTarget));
      (e.target as HTMLFormElement).reset();
      setPending(false);
      setFormValue({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        });
        setForm('SUBMITTED')
        setTimeout(() => {
          setForm('SUBMIT')
        }, 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setPending(false);
      setFormValue({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    }
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex w-full flex-col lg:gap-10 sm:gap-7 gap-4"
    >
      <div className="flex max-sm:flex-col gap-4 w-full">
        <Input
          onChange={handleChange}
          className="w-full"
          id="name"
          label="Name*"
          name="name"
          required={true}
          type="text"
          key={"name"}
          labelClass=""
        />
        <Input
          onChange={handleChange}
          className="w-full"
          id="Company"
          label="Company"
          name="company"
          required={true}
          type="text"
          key={"company"}
          labelClass=""
        />
      </div>
      <div className="flex max-sm:flex-col gap-4 w-full">
        <Input
          onChange={handleChange}
          className="w-full"
          id="email"
          label="Email*"
          name="email"
          required={true}
          type="email"
          key={"email"}
          labelClass=""
        />
        <Input
          onChange={handleChange}
          className="w-full"
          id="phone"
          label="Phone*"
          name="phone"
          required={true}
          type="tel"
          key={"phone"}
          labelClass=""
        />
      </div>
      <textarea
        onChange={() => handleChange}
        name="message"
        className="h-[100px] w-full p-3 sm:text-sm text-xs lg:text-base  bg-transparent  placeholder-mm-red/50 appearance-none  focus:outline-none border rounded-lg"
        id=""
        placeholder="Message"
      />

      <div className="flex max-sm:flex-col w-full lg:gap-5 gap-5 sm:gap-3  text-white">
        <button
          className="rounded w-[50%] outline-none shadow-[inset_0px_0px_20px_rgba(0, 0, 0, 0.25)]  bg-cy-l-blue bg-mm-green py-[10px] font-medium text-white leading-[180%] lg:hover:font-semibold duration-200"
          type="submit"
        >
          {pending ? "SUBMITTING..." : form}
        </button>
        {/* <button
          type="button"
          className="rounded w-full outline-none bg-cy-l-blue shadow-[inset_0px_0px_20px_rgba(0, 0, 0, 0.25)]  bg-mm-red py-[10px] font-medium text-white leading-[180%] lg:hover:font-semibold duration-200"
        >
          CLEAR
        </button> */}
      </div>
    </form>
  );
};

export default EnquiryForm;

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
    <div className={`relative z-0 group  border rounded-lg  ${className}`}>
      <input
        type={type}
        name={name}
        id={id}
        className="block  w-full sm:text-sm text-xs lg:text-base placeholder:text-sm bg-transparent  placeholder-mm-red/50 appearance-none  focus:outline-none px-3 py-[14px]"
        placeholder={label}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
