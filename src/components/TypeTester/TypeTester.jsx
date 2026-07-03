import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import Title from "../Title";
import { Col, Container, Row } from "react-bootstrap";

import useTypeTester from "./hooks/useTypeTester";

import Toolbar from "./Toolbar";
import Controls from "./Controls";
import Specimen from "./Specimen";

// #region styled-components
const StyledTypeTester = styled.section`
  min-height: calc(100vh - var(--nav-height) - 3rem) !important;
  p a {
    text-decoration: none;
  }
  .title {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-yellow)"};
  }
  .text-font, .text-font-italic {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-yellow)"};
  }
`;
// #endregion

const TypeTester = () => {
  const { state, actions } = useTypeTester();

  return (
  <Element name={"TypeTester"} id="type-tester">
    <StyledTypeTester className="section">
      <Container>
        <Container className="d-flex justify-content-center text-font-italic">
          <Title size={"h2"} text={"Type Tester"} color={"yellow"}  />
        </Container>
        <Row className="mt-5 text-font">
          <Col className="col-12 mb-4">
            
            <Toolbar
              state={state}
              actions={actions}
            />

            <Controls
              state={state}
              actions={actions}
            />

            <Specimen
              state={state}
            />
           
          </Col>
        </Row>
      </Container>
    </StyledTypeTester>
  </Element>
);
};

export default TypeTester;
