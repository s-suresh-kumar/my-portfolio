import React from "react";
import "./project.css";

function Project(props) {
  return (
    // console.log("Project.js PROPS", {props.image});
    // <div className="col-4" >
    < div className="card p-2 shadow border-0 h-100" >
      <div className="img-container">
        {/* <img alt={props.name} src={props.image} /> */}
        <img alt={props.name} className="card-img-top img-fluid" src={process.env.PUBLIC_URL + props.image} />
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
    </div >
    // </div>
  );
}

export default Project;