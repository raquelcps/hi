import React from "react";
import styled from "styled-components";

import { fonts } from "../data/fonts";

const StyledSingleView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 400px;
  padding: 2rem;
`;

const SpecimenText = styled.p`
  margin: 0;

  font-family: ${({ fontFamily }) => fontFamily};

  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ tracking }) => `${tracking}px`};

  text-align: center;

  word-break: break-word;
`;

const SingleView = ({ state }) => {
  const selectedFont = fonts.find(
    (font) => font.id === state.font
  );

  const selectedStyle = selectedFont.styles.find(
    (style) => style.id === state.style
  );

  return (
    <StyledSingleView data-testid="single-view" className="single-view">
      <SpecimenText
        data-testid="specimen-text"
        fontFamily={selectedStyle.family}
        fontSize={state.fontSize}
        lineHeight={state.lineHeight}
        tracking={state.tracking}
      >
        {state.text}
      </SpecimenText>
    </StyledSingleView>
  );
};

export default SingleView;
