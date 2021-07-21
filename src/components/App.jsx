import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [showInput, setShowInput] = useState(true);

  function handleClick(event) {
    setShowInput(false);
    setHeadingText(headingText + " " + name + "!");

    event.preventDefault();
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
          value={name}
        />
      )}
      {showInput && (
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
      )}
    </div>
  );
}

export default App;
