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
  .text-font-regular, .text-font-italic {
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
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Skills"} color={"orange"} />
          </Container>

          <Row className="mt-3 align-items-center text-font-regular">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          <Row className="mt-3 justify-content-center text-font-regular text-center">
            <Col xs={9}>
              <p>
                Working on: WCAG accessibility standards, Python (via type design), React with Redux
              </p>
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
