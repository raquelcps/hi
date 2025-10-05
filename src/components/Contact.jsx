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
  min-height: calc(100vh - var(--nav-height) - 2rem);
  padding-top: 5rem;
  h5 a {
    text-decoration: none;
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
      <StyledSection className="d-flex flex-column justify-content-start">
        <Container className="d-flex justify-content-center text-blue">
          <Title size={"h2"} text={"Contact"} color={"blue"} />
        </Container>
        <Container>
          <Row className="mt-5 text-blue text-center">
            <h5 className="mb-2 text-font">
              Email:
            </h5>
            <h5 className="mb-3 text-font-italic">
              {email}
            </h5>
          </Row>
          <Row className="mt-3 text-blue text-center">
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
               (art/design with a side of tech)
            </h5>
          </Row>
        </Container>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Contact;
