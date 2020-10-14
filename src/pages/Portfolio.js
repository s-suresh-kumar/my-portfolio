import React from "react";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Project from "../components/Project";
import projects from "./data/projects.json";

class Portfolio extends React.Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };


  // Map over this.state.projects and render a Project component for each project object
  render() {
    return (
      <Wrapper>
        <Title>Projects</Title>

        {
          this.state.projects.map(project => (

            <Project
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              githubRepo={project.githubRepo}
              deployLink={project.deployLink}
            />

          ))
        }

      </Wrapper >
    );
  }
}

export default Portfolio;
