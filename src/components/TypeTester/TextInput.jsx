import React from "react";

const TextInput = ({ state, actions }) => {
  return (
    <div className="text-input-section">
      <label htmlFor="text-input">Text Input</label>

      <input
        id="text-input"
        type="text"
        value={state.text}
        onChange={(event) =>
          actions.setText(event.target.value)
        }
        placeholder="Type your text here..."
        style={{width: "100%"}}
      />
    </div>
  );
};

export default TextInput;
