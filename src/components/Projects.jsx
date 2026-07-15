import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { selectProjects, selectMainProjects } from "../app/projectsSlice";
import { useGetProjectsQuery } from "../app/apiSlice";
import PropTypes from "prop-types";
// Router
import { Link } from "react-router-dom";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Loading from "./Loading";
import Title from "./Title";
import ProjectCard from "./ProjectCard";
import TypeTester from "./TypeTester/TypeTester";

import specimenShot from "../images/hoop-helix-team-profile-page.png";
// #region component

const Projects = () => {
  const theme = useSelector(selectMode);
  const projects = useSelector(selectProjects);
  const mainProjects = useSelector(selectMainProjects);
  const { isLoading, isSuccess, isError, error } = useGetProjectsQuery();
  let content;

  if (isLoading) {
    content = (
      <Container className="d-flex">
        <Loading />
      </Container>
    );
  } else if (isSuccess) {
    content = (
      <>
        {!error && projects.length === 0 && (
          <h2 className="text-center">
            Oops, you do not have any GitHub projects yet...
          </h2>
        )}
        {mainProjects.length !== 0 && (
          <>
            <Row xs={1} md={3} lg={3} className="mt-4 g-4 justify-content-center">
              {mainProjects.map((element) => {
                return (
                  <Col key={element.id}>
                    <ProjectCard
                      image={element.image}
                      name={element.name}
                      description={element.description}
                      url={element.html_url}
                      demo={element.homepage}
                    />
                  </Col>
                );
              })}
            </Row>
          </>
        )}
      </>
    );
  } else if (isError) {
    content = (
      <Container className="d-flex align-items-center justify-content-center">
        <h2>{`${error.status} - check getProjects query in src/app/apiSlice.js`}</h2>
      </Container>
    );
  }

  // #region styled-components
  const StyledSProjects = styled.section`
    .title {
      color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-light-blue)"};
    }
    .text-color {
      color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-light-blue)"};
    }
    .btn {
      &:hover {
        background-color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-light-blue)"};
        color: ${({ theme }) => theme.name === "light" ? "#fff" : "#000"};
      }
    }
    
    #hoop-helix .project-intro {
      margin-bottom: 8rem;
    }

    .project-shot-wrap {
      margin-top: 3.5rem;
      width: 100%;
    }

    .project-shot {
      display: block;
      width: 100%;
      height: auto;
    }

    .project-shot-caption {
      margin-top: 0.5rem;
      font-size: 0.8rem;
      color: ${({ theme }) =>
        theme.name === "light" ? "rgba(0, 0, 0, 0.55)" : "rgba(165, 214, 255, 0.6)"};
    }
  `;
  // #endregion

  return (
    <Element name={"Projects"} id="projects">
      <StyledSProjects className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Projects"} color={"light-blue"} />
          </Container>

          <Container id="hoop-helix" className="project-container mt-5">
            <Row className="project-intro justify-content-center text-color mt-3">
              <Col lg={9}>
                <h3 className="text-font-semibold">Hoop Helix</h3>

                <p className="text-font-regular">
                  Hoop Helix is a Ruby on Rails basketball analytics project that explores
                  how individual players contribute to team success beyond traditional box
                  score statistics. Built with live NBA Stats API data, it combines data
                  visualization, responsive UI, and reusable Rails architecture to
                  encourage statistical discovery.
                </p>

                <p className="text-font-regular">
                  I originally built Hoop Helix while learning web development years ago. Revisiting it has become an opportunity to rethink the
                  architecture, refine the user experience, and continue exploring new
                  ways to visualize basketball. Future plans include WNBA support,
                  expanded visualizations, and stronger automated testing.
                </p>

                <div className="d-flex gap-3 mt-3">
                  <Button>Live Demo</Button>
                  <Button>GitHub</Button>
                </div>
  
                <div className="project-shot-wrap">
                  <img
                    className="project-shot"
                    src={specimenShot}
                    alt="Hoop Helix team profile page screenshot"
                  />
                  <p className="project-shot-caption text-font-regular">
                    Hoop Helix Team Profile page
                  </p>
                </div>
              </Col>
            </Row>
          </Container>

          <Container id="specimen-lab" className="project-container mt-5">
            {/* <Row className="project-container justify-content-center mt-3 text-color">
              <Col xs={12} md={12} className="mt-5"> */}
                <TypeTester />
              {/* </Col>
            </Row> */}
          </Container>

        </Container>
      </StyledSProjects>
    </Element>
  );
};
// #endregion

export default Projects;
