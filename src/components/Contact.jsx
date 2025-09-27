import React from "react";
// Styles
import styled from "styled-components";
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import Title from "./Title";
import { Container, Row } from "react-bootstrap";
// Icons
import { Icon } from "@iconify/react";
// import ContactForm from "./ContactForm";

// #region styled-components
const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem);
  padding-top: 5rem;
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
          {/* <ContactForm /> */}
          <Row className="text-center mt-5 text-blue">
            <h5 className="mb-3 text-font">Email: {email}</h5>
            <h5 className="mb-3 text-font">Instagram:
              {/* <Icon className="link-icons" icon="icomoon-free:instagram" /> */}
              <a
                href={instagramLink}
                aria-label="Check out my Instagram profile."
                className="text-font"
              >
                chicagopublicskills
              </a>
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
