import React from "react";
interface FormTemplateProps {
  email: any;
  name: any;
  phone?: any;
  company?: any;
  message: any;
}

const FormTemplate: React.FC<Readonly<FormTemplateProps>> = ({
  email,
  company,
  message,
  name,
  phone,
}) => (
  <div>
    <p>Hello,</p>
    <p>
      You got a new message from <strong>Madinath Group </strong> Website:
    </p>
    <p>
      <span
        style={{
          fontSize: "13pt",
          fontFamily: "arial, helvetica, sans-serif",
          lineHeight: "100%",
        }}
      >
        Name :&nbsp; <strong>{name}</strong>
      </span>
    </p>
    <p>
      <span
        style={{
          fontSize: "13pt",
          fontFamily: "arial, helvetica, sans-serif",
          lineHeight: "100%",
        }}
      >
        Email : <strong>{email}</strong>
      </span>
    </p>
    {phone && (
      <p>
        <span
          style={{
            fontSize: "13pt",
            fontFamily: "arial, helvetica, sans-serif",
            lineHeight: "100%",
          }}
        >
          Phone Number : <strong>{phone}</strong>
        </span>
      </p>
    )}
    {company && (
      <p>
        <span
          style={{
            fontSize: "13pt",
            fontFamily: "arial, helvetica, sans-serif",
            lineHeight: "100%",
          }}
        >
          company :<strong> {company}</strong>
        </span>
      </p>
    )}
    {message && (
      <div>
        <div>
          <span
            style={{
              fontSize: "13pt",
              fontFamily: "arial, helvetica, sans-serif",
              lineHeight: "100%",
            }}
          >
            Message : <strong>{message}</strong>
          </span>
        </div>
        <div>&nbsp;</div>
      </div>
    )}

    <p>Best wishes,</p>
    <p>
      <span style={{ color: "rgb(224, 62, 45)" }}>Madinath Group</span>
    </p>
    <p>&nbsp;</p>
  </div>
);

export default FormTemplate;
