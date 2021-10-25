import React, { useState } from "react";

function AngryButton(props) {
  const [anger, setAnger] = useState();
  return (
    <button
      style={{ backgroundColor: `rgba(255, 0, 0, ${anger})` }}
      className="AngryButton"
    >
      {/* ${anger} is the opacity decimal. This value can be anything from 0.0 to 1.0.*/}
      {anger < 1 && <span>Don't click me too much! </span>}
      {anger > 1 && <span>Rawr! </span>}
    </button>
  );
}

export default AngryButton;
