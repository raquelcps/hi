import React from "react";
// Styles
import styled from "styled-components";
// Styles
import "./custom.scss";

// Components
import { Element } from "react-scroll";
// import Title from "../Title";
import { Col, Container, Row } from "react-bootstrap";

import useTypeTester from "./hooks/useTypeTester";

import Toolbar from "./Toolbar";
import TextInput from "./TextInput";
import Controls from "./Controls";
import Specimen from "./Specimen";
import CssPanel from "./CssPanel";

// #region styled-components
const StyledTypeTester = styled.div`
  min-height: calc(100vh - var(--nav-height) - 3rem) !important;
  p a {
    text-decoration: none;
  }
  .text-font, .text-font-italic {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-light-blue)"};
  }

  // Create the main columns for the tools and specimen
  .main-container {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 2.5rem;
  }
  .main-container > div {
    min-width: 0;
  }

  // Style the tools section
  .main-container label {
    display: block;
    margin-bottom: 0.35rem;
    font-size: .75rem;
    font-weight: 600;
    letter-spacing: .05em;
    text-transform: uppercase;
    color: #848080;
  }
  .main-container select,
  .main-container input {
    width: 100%;

    border: 1px solid #d8d8d8;
    border-radius: 6px;

    font-size: .75rem;

    transition:
      border-color .15s ease,
      box-shadow .15s ease;
  }

  .main-container select:focus,
  .main-container input:focus {
    outline: none;

    border-color: #888;

    box-shadow:
      0 0 0 3px rgba(0,0,0,.08);
  }

  .select-wrapper {
    position: relative;
    margin-bottom: 1.25rem;
  }
  .select-wrapper select {
    padding: .65rem .85rem;
    text-transform: capitalize;
  } 
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  .select-icon {
    position: absolute;
    color: #ffffff;
    font-size: 1.25rem;
    right: 0.75rem;
    top: 65%;
    transform: translateY(-50%);

    pointer-events: none;
  }
  .text-input-section,
  .controls-section {
    margin-bottom: 1.25rem;
    margin-top: 2.25rem;
  }
  .text-input-section input {
    padding: .65rem .85rem;
  }
  .controls-section input {
    margin-bottom: 1.55rem;
  }
  .multiline-label {
    white-space: pre-line;
  }
  .single-view,
  .waterfall-view,
  .paragraph-view,
  .grid-view {
    border: 1px solid #f9f9f924;
    border-radius: 6px;
    background-color: #f9f9f924;
    overflow: hidden;
  }

  .project-intro {
    margin-bottom: 4rem;
    padding-right: 5rem;
  }

  @media (max-width: 768px) {
    .main-container {
      grid-template-columns: 1fr;
    }
    .project-intro {
      padding-right: 0rem;
    }
  }
`;
// #endregion

const TypeTester = () => {
  const { state, actions } = useTypeTester();

  return (
  <Element name={"TypeTester"}>
    <StyledTypeTester className="div">
      <Container>
        <Row className="project-intro text-font col-md-10 col-sm-12 mx-auto">
          <Col className="">
          <h3>Specimen Lab</h3>

          <p>
            Specimen Lab is an interactive React application for exploring my original typefaces. I built it to test different fonts, styles, and sizes in a variety of views. I can also adjust the line height and tracking. To tie it back to my design and development work, I included a CSS Panel to view and copy the CSS code for the selected font and style.
          </p>
          </Col>
        </Row>
        <Row className="mt-5 text-font justify-content-center main-container col-md-10 col-sm-12 mx-auto">
          <div>
            <Toolbar
              state={state}
              actions={actions}
            />

            <TextInput
              state={state}
              actions={actions}
            />

            <Controls
              state={state}
              actions={actions}
            />
          </div>
          <div>
            <Specimen
              state={state}
            />

            <CssPanel
              state={state}
            />
          </div>
        </Row>

      </Container>
    </StyledTypeTester>
  </Element>
);
};

export default TypeTester;
