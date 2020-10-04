import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import MyForm from "../components/MyForm";


function Contact() {

  return (
    <Wrapper>
      <Title>Contact Form</Title>
      <p>
        Let me know of how
        I can serve year software needs. Would love to hear from you. Use the form below to contact me. I will get back to you as soon as I can.
      </p>
      <MyForm />
    </Wrapper >
  );
}

export default Contact;