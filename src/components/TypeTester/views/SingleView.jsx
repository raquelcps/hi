import React from "react";
import styled from "styled-components";

const StyledSingleView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 400px;
  padding: 2rem;
`;

const SpecimenText = styled.p`
  margin: 0;

  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ tracking }) => `${tracking}px`};

  text-align: center;

  word-break: break-word;
`;

const SingleView = ({ state }) => {
  return (
    <StyledSingleView>
      <SpecimenText
        data-testid="specimen-text"
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