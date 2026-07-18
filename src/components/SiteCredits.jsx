import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";

// #region styled-components
const StyledSiteCredits = styled.section`
  min-height: calc(100vh - var(--nav-height) - 5rem) !important;
  p a {
    text-decoration: none;
  }
  .title {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-yellow)"};
  }
  .text-font-semibold, .text-font-italic {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-yellow)"};
  }
`;
// #endregion

const SiteCredits = () => (
  <Element name={"SiteCredits"} id="site-credits">
    <StyledSiteCredits className="section">
      <Container>
        <Container className="d-flex justify-content-center text-font-italic">
          <Title size={"h2"} text={"Site Credits"} color={"yellow"}  />
        </Container>
        <Row className="mt-5 text-font-semibold text-center">
          <Col className="col-md-6 col-12 mb-4">
            <p>Fonts:</p>
            <p>
              Monaspace Krypton and Monaspace Neon by <a href="https://github.com/githubnext/monaspace" target="_blank" rel="noopener noreferrer">GitHub</a>.
            </p>
            <p>Template:</p>
            <p>
              React portfolio template by <a href="https://github.com/mshuber1981/github-react-portfolio-template/tree/main?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">Michael Huber</a>.
            </p>
          </Col>
          <Col className="col-md-6 col-12"> 
            <p>Photos:</p>
            <p>
              Hero image by <a href="https://unsplash.com/s/users/alessio-soggetti" target="_blank" rel="noopener noreferrer">Alessio Soggetti</a> on Unsplash.
            </p>
            <p>
              Floppy disk image has been altered from the original by <a href="https://commons.wikimedia.org/wiki/File:5_25-HD-Diskette.jpg#Licensing" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a>.
            </p>
            <p>
              Profile image by <a href="https://www.drew.works" target="_blank" rel="noopener noreferrer">Drew Arrieta</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </StyledSiteCredits>
  </Element>
);

export default SiteCredits;
