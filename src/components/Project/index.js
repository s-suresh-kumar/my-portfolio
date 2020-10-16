
import React from "react";
import "./project.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <a target="_blank" rel="noopener noreferrer" href={props.deployLink}><img alt={props.name} src={process.env.PUBLIC_URL + props.image} width="400" height="274" /> </a>

      </div>
      <div className="content text-center">
        <a target="_blank" rel="noopener noreferrer" className="myGButton" href={props.deployLink} role="button">{props.name}</a>

        <a target="_blank" rel="noopener noreferrer" className="myYButton" href={props.githubRepo} role="button">Code</a>

      </div>
    </div >
  );
}

export default Project;
