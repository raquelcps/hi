import React from "react";

import { fonts } from "./data/fonts";
import { AVAILABLE_VIEWS } from "./config";
// TODO: change to arrow function for consistency with other components
export default function Toolbar({ state, actions }) {
  const selectedFont = fonts.find(
    (font) => font.id === state.font
  );

  return (
    <div>

      <div>

        <label htmlFor="font-select">Font</label>

        <select
          id="font-select"
          value={state.font}
          onChange={(event) => {
            const newFont = fonts.find(
              (font) => font.id === event.target.value
            );

            actions.setFont(newFont.id);
            actions.setStyle(newFont.styles[0].id);
          }}
        >
          {fonts.map((font) => (
            <option
              key={font.id}
              value={font.id}
            >
              {font.family}
            </option>
          ))}
        </select>

      </div>

      <div>

        <label htmlFor="style-select">Style</label>

        <select
          id="style-select"
          value={state.style}
          onChange={(event) =>
            actions.setStyle(event.target.value)
          }
        >
          {selectedFont.styles.map((style) => (
            <option
              key={style.id}
              value={style.id}
            >
              {style.name}
            </option>
          ))}
        </select>

      </div>

      <div>

        <label htmlFor="view-select">View</label>

        <select
          id="view-select"
          value={state.view}
          onChange={(event) =>
            actions.setView(event.target.value)
          }
        >
          {AVAILABLE_VIEWS.map((view) => (
            <option
              key={view}
              value={view}
            >
              {view}
            </option>
          ))}
        </select>

      </div>

      <div>

        <label htmlFor="text-input">Text</label>

        <input
          id="text-input"
          type="text"
          value={state.text}
          onChange={(event) =>
            actions.setText(event.target.value)
          }
        />

      </div>

    </div>
  );
}
// Font selector
// Style selector
// View selector
// Text input