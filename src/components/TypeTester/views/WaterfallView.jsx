import React from "react";
import styled from "styled-components";

import { WATERFALL_SCALE_STEPS } from "../config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;

const SpecimenText = styled.p`
  margin: 0;

  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ tracking }) => `${tracking}px`};

  word-break: break-word;
`;

const WaterfallView = ({ state }) => {
  const baseSize = Number(state.fontSize);

  return (
    <div data-testid="waterfall-view" className="waterfall-view">
      <Wrapper>
        {WATERFALL_SCALE_STEPS.map((scale, index) => {
          const size = baseSize * scale;

          return (
            <SpecimenText
              key={index}
              data-testid="waterfall-text"
              size={size}
              lineHeight={state.lineHeight}
              tracking={state.tracking}
            >
              {state.text}
            </SpecimenText>
          );
        })}
      </Wrapper>
    </div>
  );
};

export default WaterfallView;
