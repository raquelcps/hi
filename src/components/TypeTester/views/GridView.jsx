import React from "react";
import styled from "styled-components";

import { fonts } from "../data/fonts";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(275px, 100%), 1fr));
  gap: 1.5rem;
  padding: 2rem;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;

  @media (max-width: 700px) {
    grid-template-columns: minmax(0, 1fr);
    padding: 1rem;
  }
`;
// const Grid = styled.div`
//   display: grid;
//   gap: 1.5rem;
//   padding: 2rem;

//   grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));

//   width: 100%;
//   min-width: 0;
//   box-sizing: border-box;
//   max-width: 100%;

//   outline: 2px solid red;

//   @media (max-width: 700px) {
//     grid-template-columns: minmax(0, 1fr);
//     padding: 1rem;
//   }
// `;

// const Grid = styled.div`
//   display: grid;
//   gap: 1.5rem;
//   padding: 2rem;

//   grid-template-columns: repeat(auto-fit, minmax(min(275px, 100%), 1fr));

//   width: 100%;
//   max-width: 100%;
//   box-sizing: border-box;

//   @media (max-width: 700px) {
//     grid-template-columns: 1fr;
//     padding: 1rem;
//   }
// `;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 1rem;
  min-width: 0;
  max-width: 100%;
  box-sizing: border-box;

  @media (max-width: 700px) {
    padding: .75rem;
  }
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

  width: 100%;
  min-width: 0;
  max-width: 100%;

  word-break: break-word;
  overflow-wrap: anywhere;
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
