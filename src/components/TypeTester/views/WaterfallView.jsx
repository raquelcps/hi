import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { fonts } from "../data/fonts";

import {
  WATERFALL_SCALE_STEPS,
  MOBILE_WATERFALL_SCALE_STEPS
} from "../config";

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
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 700
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    window.addEventListener("resize", handleResize);

    return () =>
      window.removeEventListener("resize", handleResize);
  }, []);

  const scaleSteps = isMobile
  ? MOBILE_WATERFALL_SCALE_STEPS
  : WATERFALL_SCALE_STEPS;

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
        {scaleSteps.map((scale, index) => {
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
