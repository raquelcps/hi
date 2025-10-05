import React from "react";
// State
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
// Config
import { experienceList, skillsList, skillData, resume } from "../config";

// #region component
const Skills = () => {
  const theme = useSelector(selectMode);

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container>
          <Container className="d-flex justify-content-center text-orange">
            <Title size={"h2"} text={"Skills"} color={"orange"} />
          </Container>
          <Row className="align-items-start mt-5 text-font text-orange">
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
          {/* Keep this icons for now. Maybe make them smaller and just run accross the bottom */}
          <Row className="mt-3 align-items-center text-orange">
            {skillData.map((skills) => (
              <Col xs={2} key={skills.id} className="my-md-3 text-center">
                <p>{skills.skill}</p>
              </Col>
            ))}
          </Row>
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
      </section>
    </Element>
  );
};
// #endregion

export default Skills;
