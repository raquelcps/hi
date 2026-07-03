import { useState } from "react";
import {
  DEFAULT_FONT,
  DEFAULT_STYLE,
  DEFAULT_TEXT,
  DEFAULT_VIEW,
  DEFAULT_FONT_SIZE,
  DEFAULT_LINE_HEIGHT,
  DEFAULT_TRACKING,
} from "../config";
// TODO: change to arrow function for consistency with other components
export default function useTypeTester() {
  const [font, setFont] = useState(DEFAULT_FONT);
  const [style, setStyle] = useState(DEFAULT_STYLE);
  const [text, setText] = useState(DEFAULT_TEXT);
  const [view, setView] = useState(DEFAULT_VIEW);

  const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
  const [lineHeight, setLineHeight] = useState(DEFAULT_LINE_HEIGHT);
  const [tracking, setTracking] = useState(DEFAULT_TRACKING);

  return {
    state: {
      font,
      style,
      text,
      view,
      fontSize,
      lineHeight,
      tracking,
    },

    actions: {
      setFont,
      setStyle,
      setText,
      setView,
      setFontSize,
      setLineHeight,
      setTracking,
    },
  };
}