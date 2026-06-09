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
      className="flex w-full flex-col lg:gap-8 sm:gap-6 gap-4 mt-4"
    >
      <div className="flex max-sm:flex-col gap-8 w-full">
        <Input
          onChange={handleChange}
          className="w-full"
          id="name"
          label="Name*"
          name="name"
          required={true}
          type="text"
          value={formValue.name}
        />
        <Input
          onChange={handleChange}
          className="w-full"
          id="Company"
          label="Company"
          name="company"
          required={false}
          type="text"
          value={formValue.company}
        />
      </div>
      <div className="flex max-sm:flex-col gap-8 w-full mt-2">
        <Input
          onChange={handleChange}
          className="w-full"
          id="email"
          label="Email*"
          name="email"
          required={true}
          type="email"
          value={formValue.email}
        />
        <Input
          onChange={handleChange}
          className="w-full"
          id="phone"
          label="Phone*"
          name="phone"
          required={true}
          type="tel"
          value={formValue.phone}
        />
      </div>
      <div className="mt-2 relative w-full">
        <textarea
          onChange={(e) => handleChange(e as any)}
          name="message"
          value={formValue.message}
          className="h-[50px] w-full py-2 text-sm lg:text-base text-gray-800 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:border-mm-green placeholder-gray-600 transition-colors duration-300 resize-none"
          id="message"
          placeholder="Message"
        />
      </div>

      <div className="flex justify-end w-full mt-4">
        <button
          className="rounded-[10px] bg-mm-green px-8 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#38803a] shadow-md"
          type="submit"
          disabled={pending}
        >
          {pending ? "Submitting..." : "Submit Now"}
        </button>
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
  value,
  onChange,
}: {
  className?: string;
  type: string;
  name: string;
  id: string;
  label: string;
  required: boolean;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="block w-full py-2 text-sm lg:text-base text-gray-800 bg-transparent border-0 border-b border-gray-400 appearance-none focus:outline-none focus:border-mm-green placeholder-gray-600 transition-colors duration-300"
        placeholder={label}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};
