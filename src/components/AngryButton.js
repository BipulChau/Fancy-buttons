import React from "react";

function AngryButton() {
  return (
    <button className="AngryButton">
      {/*If you have not reached the maximum */}{" "}
      <span>Don't click me too much! </span>
      {/*If you have reached the maximun */} <span>Rawr! </span>
    </button>
  );
}

export default AngryButton;
