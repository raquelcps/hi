import React from "react";
// Styles
import styled from "styled-components";
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import Title from "./Title";
import { Container, Row } from "react-bootstrap";

// #region styled-components
const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem) !important;
  h5 a {
    text-decoration: none;
  }
  .title {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-blue)"};
  }
  .text-font, .text-font-italic {
    color: ${({ theme }) => theme.name === "light" ? "#000" : "var(--primary-blue)"};
  }
`;
// #endregion

// #region component
const propTypes = {
  email: PropTypes.string,
  instagramLink: PropTypes.string
};

const Contact = ({ email, instagramLink }) => {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Contact"} color={"blue"} />
          </Container>
          <Container>
            <Row className="mt-5 text-center">
              <h5 className="mb-2 text-font">
                Email:
              </h5>
              <h5 className="mb-3 text-font-italic">
                {email}
              </h5>
            </Row>
            <Row className="mt-3 text-center">
              <h5 className="mb-2 text-font">Instagram:</h5>
              <h5 className="text-font-italic mb-2">
                <a
                  href={instagramLink}
                  aria-label="Check out my Instagram profile."
                >
                  chicagopublicskills
                </a>
              </h5>
              <h5 className="text-font-italic mb-3">
                (art & design with a side of tech)
              </h5>
            </Row>
          </Container>
        </Container>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Contact;
