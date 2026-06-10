"use client";
import React, { FormEvent, useState, useMemo } from "react";
import SectionWrapper from "../SectionWrapper";
import Image from "next/image";
import cartImage from "@/assets/images/cart.svg";
import { useFormState } from "react-dom";
import { sendFeedbackForm } from "@/libs/formAction";

const FeedbackForm = () => {
  const [message, formAction] = useFormState(sendFeedbackForm, null);
  const [error, setError] = useState("");
  const [form, setForm] = useState('Send Message');
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
      const formData = new FormData(e.currentTarget);
      await sendFeedbackForm(null, formData);
      (e.target as HTMLFormElement).reset();  
      setForm('Submitted');
      setFormValue({
        name: "",
        email: "",
        message: "",
      });
      setTimeout(() => {
        setForm('Send Message');
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
    <SectionWrapper className="bg-mm-red py-16 md:py-24 px-4 w-full font-sans text-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        
        {/* Top Section: Form & Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Feedback Form */}
          <div className="w-full lg:w-1/2 flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 tracking-wide">Feedback Form</h2>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-lg">
              <div className="flex flex-col md:flex-row gap-8 w-full">
                <Input
                  id="name"
                  label="Name*"
                  name="name"
                  required={true}
                  type="text"
                  value={formValue.name}
                  onChange={handleChange}
                />
                <Input
                  id="email"
                  label="Email*"
                  name="email"
                  required={true}
                  type="email"
                  value={formValue.email}
                  onChange={handleChange}
                />
              </div>
              <Input
                id="message"
                label="Message"
                name="message"
                required={false}
                type="text"
                value={formValue.message}
                onChange={handleChange}
              />
              
              <div className="flex justify-end mt-2">
                <button 
                  type="submit" 
                  disabled={pending}
                  className="bg-mm-green text-white px-8 py-2.5 rounded-[12px] text-sm font-medium border border-white hover:bg-[#38803a] transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed shadow-md"
                >
                  {pending ? "Sending..." : form}
                </button>
              </div>
            </form>
          </div>
          
          {/* Cart SVG Image */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
             <Image 
               src={cartImage} 
               alt="Shopping Cart" 
               className="w-full max-w-[450px] h-auto object-contain opacity-90"
               priority
             />
          </div>
        </div>

        {/* Bottom Section: Contact Info */}
        <div className="flex flex-col items-center mt-4">
          <h3 className="text-2xl font-bold mb-8 tracking-wide">Contact Info</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <ContactBadge prefix="PB No:" text="69004, Dubai, U.A.E" href="https://www.google.com/maps/search/?api=1&query=Madinath+Group+69004+Dubai" />
            <ContactBadge prefix="Tel:" text="+971 4 2643488" href="tel:+97142643488" />
            <ContactBadge prefix="Fax:" text="+971 4 2643662" href="tel:+97142643662" />
            <ContactBadge prefix="Email:" text="info@madinathgroup.com" href="mailto:info@madinathgroup.com" />
          </div>
        </div>
        
      </div>
    </SectionWrapper>
  );
};

// Input Component
const Input = ({
  type,
  name,
  id,
  label,
  required,
  value,
  onChange,
}: {
  type: string;
  name: string;
  id: string;
  label: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="relative w-full mb-4">
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        className="block py-2 px-1 w-full text-sm text-white bg-transparent border-0 border-b border-white/60 appearance-none focus:outline-none focus:border-white focus:ring-0 placeholder-white/80 transition-colors duration-300"
        placeholder={label}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

// Contact Badge Component
const ContactBadge = ({ prefix, text, href }: { prefix: string; text: string; href: string }) => {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer" className="bg-white rounded-[12px] px-6 py-3 shadow-md flex items-center gap-2 transition-transform duration-300 hover:-translate-y-1">
      <span className="text-mm-green font-bold text-sm">{prefix}</span>
      <span className="text-gray-800 font-medium text-sm hover:text-mm-red transition-colors">{text}</span>
    </a>
  );
};

export default FeedbackForm;
