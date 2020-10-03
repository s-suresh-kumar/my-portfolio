import React from "react";
import "./project.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container table">
        {/* <img alt={props.name} src={props.image} /> */}
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content text-center">
        {/* <ul>
          <li > */}
        {/* <strong className="myGButton"> {props.name}
            </strong> */}
        <a target="_blank" className="myGButton" href={props.deployLink} role="button">{props.name}</a>
        {/* </li>
          <li > */}
        <a target="_blank" className="myYButton" href={props.githubRepo} role="button">Code</a>
        {/* 
          </li>
        </ul> */}



        {/* <a target="_blank" className="MyGButton" href={props.deployLink} role="button">Deployed App</a> */}


      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default Project;