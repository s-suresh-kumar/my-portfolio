import React from "react";
import "./project.css";

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Title:</strong> {props.name}
          </li>
          <li>
            <a target="_blank" className="btn btn-primary" href={props.githubRepo} role="button">Code Repo</a>
          </li>
          <li>
            <a target="_blank" className="btn btn-primary" href={props.deployLink} role="button">Deployed App</a>
          </li>
        </ul>
      </div>
      {/* <span onClick={() => props.removeFriend(props.id)} className="remove">
        𝘅
      </span> */}
    </div>
  );
}

export default Project;