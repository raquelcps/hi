import React from "react";
// Styles
import styled from "styled-components";
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import Title from "./Title";
import { Container, Row } from "react-bootstrap";

// #region styled-components
const StyledContact = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem) !important;

  --contact-font-color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-dark)" : "var(--primary-blue)"};
  --contact-font-hover-color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-secondary)" : "var(--bs-info)"};

  h5 a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition);
  }

  h5 a:hover,
  h5 a:focus-visible {
    color: var(--contact-font-hover-color);
  }

  .title {
    color: var(--contact-font-color);
  }

  .text-font, .text-font-italic {
    color: var(--contact-font-color);
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
      <StyledContact className="section">
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
                <a href={`mailto:${email}`}>
                  {email}
                </a>
              </h5>
            </Row>
            <Row className="mt-5 text-center">
              <h2 className="mb-2 text-font"><Icon icon="bi:instagram" /></h2>
              <h5 className="text-font-italic mb-2">
                <a
                  href={instagramLink}
                  aria-label="Check out my Instagram profile."
                >
                  @chicagopublicskills
                </a>
              </h5>
            </Row>
          </Container>
        </Container>
      </StyledContact>
    </Element>
  );
};

Contact.propTypes = propTypes;
// #endregion

export default Contact;
