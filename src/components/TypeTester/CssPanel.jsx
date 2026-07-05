import React, { useMemo, useState } from "react";

import { fonts } from "./data/fonts";

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
      `font-family: "${selectedFont.family}";`,
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

  return (
    <section className="css-panel">
      <div className="css-panel-header">
        <h4>CSS Properties</h4>

        <button
          type="button"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy CSS"}
        </button>
      </div>

      <pre>
        <code>{css}</code>
      </pre>
    </section>
  );
};

export default CssPanel;
