
import React from "react";
import "./project.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <a target="_blank" href={props.deployLink}><img alt={props.name} src={process.env.PUBLIC_URL + props.image} width="400" height="274" /> </a>

      </div>
      <div className="content text-center">
        <a target="_blank" className="myGButton" href={props.deployLink} role="button">{props.name}</a>

        <a target="_blank" className="myYButton" href={props.githubRepo} role="button">Code</a>

      </div>
    </div >
  );
}
{/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Deployed:</strong> {props.deployLink}
          </li>
          <li>
            <strong>Code:</strong> {props.githubRepo}
          </li>
        </ul>
      </div>
    </div> */}


export default Project;
