import React from "react";
// Styles
import styled from "styled-components";
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Components
import { Element } from "react-scroll";
import Title from "./Title";
import { Col, Container, Row } from "react-bootstrap";

// #region styled-components
const StyledContact = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem) !important;

  --contact-font-color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-dark)" : "var(--primary-blue)"};
  --contact-font-hover-color: ${({ theme }) =>
    theme.name === "light" ? "var(--bs-secondary)" : "var(--bs-info)"};

  h5 a,
  h2 a {
    color: inherit;
    text-decoration: none;
    transition: color var(--transition);
  }

  h5 a:hover,
  h5 a:focus-visible,
  h2 a:hover,
  h2 a:focus-visible {
    color: var(--contact-font-hover-color);
  }

  .title {
    color: var(--contact-font-color);
  }

  .text-font-regular, .text-font-italic {
    color: var(--contact-font-color);
  }

  @media (max-width: 576px) {
    h5 a {
      font-size: .95rem;
    }
  }
`;
// #endregion

// #region component
const propTypes = {
  email: PropTypes.string,
  instagramLink: PropTypes.string,
  linkedinLink: PropTypes.string,
};

const Contact = ({ email, instagramLink, linkedinLink }) => {
  return (
    <Element name={"Contact"} id="contact">
      <StyledContact className="section">
        <Container>
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Contact"} color={"blue"} />
          </Container>
          <Container>
            <Row className="mt-5 text-center justify-content-center align-items-center g-0 flex-column">
              <Col xs="auto">
                <h5 className="mb-2 text-font-regular">Email:</h5>
              </Col>
              <Col xs="auto">
                <h5 className="mb-3 text-font-italic">
                  <a href={`mailto:${email}`} aria-label={`Send an email to ${email}`}>
                    {email}
                  </a>
                </h5>
              </Col>
            </Row>
            <Row className="mt-5 text-center justify-content-center align-items-center g-0">
              <h2 className="text-font-italic mb-2 mx-2 w-auto">
                <a
                  href={instagramLink}
                  aria-label="Check out my Instagram profile."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="bi:instagram" />
                </a>
              </h2>
              <h2 className="text-font-italic mb-2 mx-2 w-auto">
                <a
                  href={linkedinLink}
                  aria-label="Check out my LinkedIn profile."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon icon="bi:linkedin" />
                </a>
              </h2>
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
