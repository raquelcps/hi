import React from "react";
import styled from "styled-components";

import { fonts } from "../data/fonts";

import { WATERFALL_SCALE_STEPS } from "../config";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2rem;
`;

const SpecimenText = styled.p`
  margin: 0;

  font-family: ${({ fontFamily }) => fontFamily};

  font-size: ${({ size }) => `${size}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ tracking }) => `${tracking}px`};

  word-break: break-word;
`;

const WaterfallView = ({ state }) => {
  const selectedFont = fonts.find(
    (font) => font.id === state.font
  );

  const selectedStyle = selectedFont.styles.find(
    (style) => style.id === state.style
  );
  // handle edge case where selectedFont or selectedStyle is undefined
  if (!selectedFont || !selectedStyle) return null;

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
              fontFamily={selectedStyle.family}
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
