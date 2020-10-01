import React from "react";
import Header from "../components/Header";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Project from "../components/Project";
import projects from "./data/projects.json";

class Portfolio extends React.Component {
  // Setting this.state.projects to the projects json array
  state = {
    projects
  };

  // removeFriend = id => {
  //   // Filter this.state.projects for projects with an id not equal to the id being removed
  //   const projects = this.state.projects.filter(friend => friend.id !== id);
  //   // Set this.state.projects equal to the new projects array
  //   this.setState({ projects });
  // };

  // Map over this.state.projects and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Projects List</Title>
        {
          this.state.projects.map(project => (
            <Project
              // removeFriend={this.removeFriend}
              id={project.id}
              key={project.id}
              name={project.name}
              image={project.image}
              occupation={project.occupation}
              location={project.location}
            />
          ))
        }
      </Wrapper >
    );
  }
}

export default Portfolio;
