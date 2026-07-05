import React, { useMemo, useState } from "react";
import styled from "styled-components";

import { fonts } from "./data/fonts";

// #region styled-components
const StyledCssPanel = styled.div`
  & {
  margin-top: 2rem;
  overflow: hidden;

  border-radius: 8px;

  border: 1px solid
    ${({ theme }) =>
      theme.name === "light"
        ? "#d0d7de"
        : "#30363d"};

  background:
    ${({ theme }) =>
      theme.name === "light"
        ? "#f6f8fa"
        : "#161b22"};
  }

  .css-panel-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0.75rem 1rem;

    border-bottom: 1px solid
      ${({ theme }) =>
        theme.name === "light"
          ? "#d0d7de"
          : "#30363d"};

    background:
      ${({ theme }) =>
        theme.name === "light"
          ? "#f6f8fa"
          : "#0d1117"};
  }

  .css-panel-title {
    font-size: 0.8rem;
    font-weight: 600;
    color:
      ${({ theme }) =>
        theme.name === "light"
          ? "#57606a"
          : "#8b949e"};

    letter-spacing: 0.03em;
  }

  .css-panel-header button {
    border: none;
    background: transparent;

    cursor: pointer;

    font-size: 0.8rem;
    font-weight: 500;

    color:
      ${({ theme }) =>
        theme.name === "light"
          ? "#57606a"
          : "#8b949e"};

    transition: color .15s ease;
  }

  .css-panel-header button:hover {
    color:
      ${({ theme }) =>
        theme.name === "light"
          ? "#24292f"
          : "#f0f6fc"};
  }

  .css-panel-body {
    margin: 0;
    padding: 1rem;

    overflow-x: auto;

    font-family:
      ui-monospace,
      SFMono-Regular,
      SF Mono,
      Consolas,
      "Liberation Mono",
      monospace;

    font-size: 0.85rem;
    line-height: 1.6;

    color:
      ${({ theme }) =>
        theme.name === "light"
          ? "#24292f"
          : "#c9d1d9"};

    background:
      ${({ theme }) =>
        theme.name === "light"
          ? "#ffffff"
          : "#0d1117"};
  }

  .css-panel-body code {
    white-space: pre;
  }
  .css-panel-header button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
// #endregion

const CssPanel = ({ state }) => {
  const [copied, setCopied] = useState(false);

  const selectedFont = fonts.find(
    (font) => font.id === state.font
  );

  const selectedStyle = selectedFont.styles.find(
    (style) => style.id === state.style
  );

  const css = useMemo(() => {
    const declarations = [
      `font-family: "${selectedStyle.family}";`,
      `font-size: ${state.fontSize}px;`,
      `line-height: ${state.lineHeight};`,
      `letter-spacing: ${state.tracking}px;`,
    ];

    // Only output these when applicable
    if (selectedStyle.weight) {
      declarations.push(`font-weight: ${selectedStyle.weight};`);
    }

    if (selectedStyle.fontStyle === "italic") {
      declarations.push("font-style: italic;");
    }

    return declarations.join("\n");
  }, [state, selectedFont, selectedStyle]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(css);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  const isGridView = state.view === "grid";

  return (
    <StyledCssPanel className="css-panel">
      <div className="css-panel-header">
        <span className="css-panel-title">CSS Properties</span>

        <button
          type="button"
          onClick={handleCopy}
          disabled={isGridView}
        >
          {copied ? "Copied!" : "Copy CSS"}
        </button>

      </div>

      <pre className="css-panel-body">
        <code>
          {isGridView
            ? "CSS is unavailable in Grid view because multiple font styles are displayed simultaneously."
            : css}
        </code>
      </pre>

    </StyledCssPanel>
  );
};

export default CssPanel;
