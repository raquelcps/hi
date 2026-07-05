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
    <div className="controls-section">

      <div>

        <label htmlFor="font-size-range" className="multiline-label">
          Font Size
          {"\n"}
          {" "}
          {state.fontSize}px
        </label>

        <input
          id="font-size-range"
          type="range"
          min={MIN_FONT_SIZE}
          max={MAX_FONT_SIZE}
          step={1}
          value={state.fontSize}
          aria-valuenow={state.fontSize}
          aria-valuetext={`${state.fontSize} pixels`}
          onChange={(event) =>
            actions.setFontSize(Number(event.target.value))
          }
        />

      </div>

      <div>

        <label htmlFor="tracking-range" className="multiline-label">
          Tracking
          {"\n"}
          {" "}
          {state.tracking}px
        </label>

        <input
          id="tracking-range"
          type="range"
          min={MIN_TRACKING}
          max={MAX_TRACKING}
          step={1}
          value={state.tracking}
          aria-valuenow={state.tracking}
          aria-valuetext={`${state.tracking} pixels`}
          onChange={(event) =>
            actions.setTracking(Number(event.target.value))
          }
        />

      </div>

      <div>

        <label htmlFor="line-height-range" className="multiline-label">
          Line Height
          {"\n"}
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
          aria-valuenow={state.lineHeight}
          onChange={(event) =>
            actions.setLineHeight(Number(event.target.value))
          }
        />

      </div>

    </div>
  );
}
