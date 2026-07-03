import React from "react";
import styled from "styled-components";

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

  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ tracking }) => `${tracking}px`};

  word-wrap: break-word;
`;

const ParagraphView = ({ state }) => {
  return (
    <Wrapper data-testid="paragraph-view">
      <ParagraphContainer>
        <SpecimenText
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