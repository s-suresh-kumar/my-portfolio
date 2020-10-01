import React from "react";
import "./header.css";

function Header(props) {
  return (
    <div className="my-hero text-center"
      style={
        { backgroundImage: `url(${props.backgroundImage})` }

      }
    >
      { props.children}
    </div >
  );
}

export default Header;