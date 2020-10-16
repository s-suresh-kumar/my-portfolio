import React from "react";
import "./wrapper.css";

function Wrapper(props) {
  return <div container-md className="wrapper">{props.children}</div>;
}

export default Wrapper;