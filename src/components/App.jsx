import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [showInput, setShowInput] = useState(true);

  function handleClick() {
    setShowInput(false);
    setHeadingText(headingText + " " + name);
  }

  const [hoveredBool, setHoveredBool] = useState(false);

  function isOver() {
    setHoveredBool(true);
  }
  function isOut() {
    setHoveredBool(false);
  }

  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      {showInput && (
        <input
          type="text"
          onChange={handleChange}
          placeholder="What's your name?"
          name={name}
        />
      )}
      <button
        onClick={handleClick}
        onMouseOver={isOver}
        onMouseOut={isOut}
        style={
          hoveredBool
            ? { backgroundColor: "black" }
            : { backgroundColor: "white" }
        }
      >
        Submit
      </button>
    </div>
  );
}

export default App;
