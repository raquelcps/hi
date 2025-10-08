import React from "react";
// Styles
import styled from "styled-components";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { experienceList, skillsList, skillData, resume } from "../config";

// #region styled-components
const StyledSkills = styled.section`
  .title {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-orange)"};
  }
  .text-font {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-orange)"};
  }
`;
// #endregion

// #region component
const Skills = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name={"Skills"} id="skills">
      <StyledSkills className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Skills"} color={"orange"} />
          </Container>
          <Row className="align-items-start mt-5 text-font">
            <Col xs={12} md={6} className="d-flex flex-column">
              <ul>
                {experienceList.map((experience, index) => (
                  <li key={index}>
                    <h5>{experience}</h5>
                  </li>
                ))}
              </ul>
            </Col>
            <Col xs={12} md={6} className="d-flex flex-column">
              <ul>
                {skillsList.map((skill, index) => (
                  <li key={index}>
                    <h5>{skill}</h5>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
          <Row className="mt-3 align-items-center text-font">
            {skillData.map((skills) => (
              <Col xs={2} lg={1} key={skills.id} className="my-md-4 text-center">
                <p>{skills.skill}</p>
              </Col>
            ))}
          </Row>
          <Row className="mt-3 justify-content-center text-font">
            <Col xs={8}>
              <h5>
                Working on: React with Redux, Python (via type design), WCAG accessibility standards, TypeScript
              </h5>
            </Col>
          </Row>
          {/* Keep optional resume button. I will host it later. */}
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </StyledSkills>
    </Element>
  );
};
// #endregion

export default Skills;
