import React from "react";
import styled from "styled-components";

import { fonts } from "../data/fonts";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const StyleName = styled.h3`
  margin: 0 0 1rem;
  font-size: 1rem;
`;

const SpecimenText = styled.p`
  margin: 0;

  font-family: ${({ fontFamily }) => fontFamily};
  
  font-size: ${({ fontSize }) => `${fontSize}px`};
  line-height: ${({ lineHeight }) => lineHeight};
  letter-spacing: ${({ tracking }) => `${tracking}px`};

  word-break: break-word;
`;

const GridView = ({ state }) => {
  const currentFont = fonts.find(
    (font) => font.id === state.font
  );

  if (!currentFont) return null;

  return (
    <Grid data-testid="grid-view" className="grid-view">
      {currentFont.styles.map((style) => (
        <Card
          key={style.id}
          data-testid="grid-specimen"
        >
          <StyleName>{style.name}</StyleName>

          <SpecimenText
            fontFamily={style.family}
            fontSize={state.fontSize}
            lineHeight={state.lineHeight}
            tracking={state.tracking}
          >
            {state.text}
          </SpecimenText>
        </Card>
      ))}
    </Grid>
  );
};

export default GridView;
