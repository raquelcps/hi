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

// #region component
const propTypes = {
  projectsIntro: PropTypes.string,
  caseStudyIntro: PropTypes.string,
  caseStudyMore: PropTypes.string,
};
const Projects = ({ projectsIntro, caseStudyIntro, caseStudyMore }) => {
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
      color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-green)"};
    }
    .text-font {
      color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-green)"};
    }
    .btn {
      border-color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-green)"};
      color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-green)"};
      &:hover {
        background-color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-green)"};
        color: ${({ theme }) => theme.name === "light" ? "#fff" : "#000"};
      }
    }
  `;
  // #endregion

  return (
    <Element name={"Projects"} id="projects">
      <StyledSProjects className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Projects"} color={"green"} />
          </Container>
          <Row className="align-items-start mt-5 text-font">
            <p className="text-center h5">{projectsIntro}</p>
          </Row>
          {content}
          <Container>
            <Row className="case-study-link justify-content-center mt-5 text-font">
              <Col xs={8} className="mt-5">
                <p className="text-center h5">{caseStudyIntro}</p>
                <p className="text-center subtitle">{caseStudyMore}</p>
              </Col>
            </Row>
            <Row className="align-items-center mt-4 text-font">
              <Col xs={12} md={12} className="d-flex justify-content-center">
                <Link to="/Redesign-Case-Study">
                  <Button
                    size="lg"
                    variant={
                      theme === "light" ? "outline-dark" : "outline-light"
                    }
                  >
                    Journal Editor Redesign Case Study
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </Container>
      </StyledSProjects>
    </Element>
  );
};

Projects.propTypes = propTypes;
// #endregion

export default Projects;
