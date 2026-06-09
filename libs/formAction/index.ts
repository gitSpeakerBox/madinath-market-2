"use server";
import { Resend } from "resend";
import EmailTemplate from "./email-template";
import FormTemplate from "./form-template";
import React from "react";

const resend = new Resend("re_iN8ZnHtf_6uji22ARY4z9hh7yZybKdenH");

export async function sendMail(prevState: any, formValue: string) {
  console.log(formValue);

  // if (formValue) {
  //   const { data, error } = await resend.emails.send({
  //     from: "onboarding@resend.dev",
  //     to: ["sales@multisystem.me"],
  //     subject: "Multisystem Logistics Website",
  //     react: EmailTemplate({ email: formValue }) as React.ReactElement,
  //   });

  //   if (error) {
  //     console.error("Error:", error);
  //   }
  //   return data;
  // }
}

export async function sendForm(prevState: any, formData: FormData) {
  console.log(formData);

  let name = formData.get("name"),
    email = formData.get("email"),
    phone = formData.get("phone"),
    company = formData.get("company"),
    message = formData.get("message");
  if (name && email && phone && company) {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@madinathgroup.com",
      subject: "Madinath Group Website",
      react: FormTemplate({
        email: email,
        company: company,
        message: message,
        name: name,
        phone: phone,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Error:", error);
    }
    return data;
  }
}

export async function sendFeedbackForm(prevState: any, formData: FormData) {
  console.log(formData);

  let name = formData.get("name"),
    email = formData.get("email"),
    message = formData.get("message");
  if (name && email) {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "info@madinathgroup.com",
      subject: "Madinath Group Website",
      react: FormTemplate({
        email: email,
        message: message,
        name: name,
      }) as React.ReactElement,
    });

    if (error) {
      console.error("Error:", error);
    }
    return 'data';
  }
}
