import React from "react";
import styled from "styled-components";

import { fonts } from "../data/fonts";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
`;

const ParagraphContainer = styled.div`
  max-width: 700px;
  width: 100%;
`;

const SpecimenText = styled.p`
  margin: 0;

  font-family: ${({ fontFamily }) => fontFamily};

  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ tracking }) => `${tracking}px`};

  word-wrap: break-word;
`;

const ParagraphView = ({ state }) => {
  const selectedFont = fonts.find(
    (font) => font.id === state.font
  );

  const selectedStyle = selectedFont.styles.find(
    (style) => style.id === state.style
  );

  return (
    <Wrapper data-testid="paragraph-view" className="paragraph-view">
      <ParagraphContainer>
        <SpecimenText
          fontFamily={selectedStyle.family}
          fontSize={state.fontSize}
          lineHeight={state.lineHeight}
          tracking={state.tracking}
        >
          {state.text}
        </SpecimenText>
      </ParagraphContainer>
    </Wrapper>
  );
};

export default ParagraphView;
