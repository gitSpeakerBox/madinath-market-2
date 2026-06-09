import * as React from "react";

interface EmailTemplateProps {
  email: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ email }) => (
  <div>
    <p>Hello,</p>
    <p>
      You got a new message from <strong>Multisystem Logistics Website</strong> Website:
    </p>
    <p>
      <span
        style={{
          fontSize: "10pt",
          fontFamily: "arial, helvetica, sans-serif;",
          lineHeight: "100%",
        }}
      >
        Email : <strong>{email}</strong>
      </span>
    </p>
    <p>&nbsp;</p>
    <p>Best wishes,</p>
    <p>
      <span style={{ color: "rgb(224, 62, 45)" }}>
        Multisystem Logistics Website
      </span>
    </p>
    <p>&nbsp;</p>
  </div>
);

export default EmailTemplate;
