import React from "react";
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import MyForm from "../../components/MyForm";


function Contact() {

  return (
    <Wrapper>
      <div className="Container-fluid col-md-12">
        <Title>Contact Me</Title>
        <p>
          Let me know of how
          I can serve your software needs. Would love to hear from you. Use the form below to contact me. I will get back to you as soon as I can.
      </p>
        <br />
        <MyForm />
      </div>
    </Wrapper >
  );
}

export default Contact;