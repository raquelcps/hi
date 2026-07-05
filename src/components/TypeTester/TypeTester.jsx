import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import Title from "../Title";
import { Col, Container, Row } from "react-bootstrap";

import useTypeTester from "./hooks/useTypeTester";

import Toolbar from "./Toolbar";
import TextInput from "./TextInput";
import Controls from "./Controls";
import Specimen from "./Specimen";

// #region styled-components
const StyledTypeTester = styled.section`
  min-height: calc(100vh - var(--nav-height) - 3rem) !important;
  p a {
    text-decoration: none;
  }
  .title {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-green)"};
  }
  .text-font, .text-font-italic {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-green)"};
  }
  // Create the main columns for the tools and specimen
  .main-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4.5rem;
  }
  @media (max-width: 768px) {
    .main-container {
      grid-template-columns: 1fr;
    }
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

    // padding: .65rem .85rem;

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
  // .controls-section {
  //   display: grid;
  //   grid-template-columns: repeat(3, 1fr);
  //   gap: 2rem;
  // }
  .multiline-label {
    white-space: pre-line;
  }
  .single-view,
  .waterfall-view,
  .paragraph-view,
  .grid-view {
    // border: 1px solid #d8d8d8;
    border: 1px solid #f9f9f924;
    border-radius: 6px;
    // background-color: #f9f9f9;
    background-color: #f9f9f924;
    overflow: hidden;
  }

  .project-intro {
    margin-bottom: 4rem;
  }
`;
// #endregion

const TypeTester = () => {
  const { state, actions } = useTypeTester();

  return (
  <Element name={"TypeTester"} id="type-tester">
    <StyledTypeTester className="section">
      <Container>
        <Container className="project-intro">
          <h3>Specimen Lab</h3>

          <p className="text-font">I built the Specimen Lab to help me evaluate fonts that I design.</p>
          <p className="text-font">The Specimen Lab allows me to test different fonts, styles, and sizes in a variety of views. I can also adjust the line height and tracking to see how the font performs in different scenarios.</p> 
        </Container>
        <Container className="mt-5 text-font justify-content-center main-container">
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
          </div>
        </Container>

      </Container>
    </StyledTypeTester>
  </Element>
);
};

export default TypeTester;
