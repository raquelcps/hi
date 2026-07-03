import React from "react";

import {
  MIN_FONT_SIZE,
  MAX_FONT_SIZE,
  MIN_TRACKING,
  MAX_TRACKING,
  MIN_LINE_HEIGHT,
  MAX_LINE_HEIGHT,
} from "./config";
// TODO: change to arrow function for consistency with other components
export default function Controls({ state, actions }) {
  return (
    <div>

      <div>

        <label htmlFor="font-size-range">
          Font Size
          {" "}
          {state.fontSize}px
        </label>

        <input
          id="font-size-range"
          type="range"
          min={MIN_FONT_SIZE}
          max={MAX_FONT_SIZE}
          value={state.fontSize}
          onChange={(event) =>
            actions.setFontSize(Number(event.target.value))
          }
        />

      </div>

      <div>

        <label htmlFor="tracking-range">
          Tracking
          {" "}
          {state.tracking}
        </label>

        <input
          id="tracking-range"
          type="range"
          min={MIN_TRACKING}
          max={MAX_TRACKING}
          value={state.tracking}
          onChange={(event) =>
            actions.setTracking(Number(event.target.value))
          }
        />

      </div>

      <div>

        <label htmlFor="line-height-range">
          Line Height
          {" "}
          {state.lineHeight}
        </label>

        <input
          id="line-height-range"
          type="range"
          min={MIN_LINE_HEIGHT}
          max={MAX_LINE_HEIGHT}
          step={0.1}
          value={state.lineHeight}
          onChange={(event) =>
            actions.setLineHeight(Number(event.target.value))
          }
        />

      </div>

    </div>
  );
}
// Font Size
// Tracking
// Line Height