import React from "react";

function LightSwitchButton() {
  return (
    <button className="LightSwitchButton">
      {/* When the state is on */}{" "}
      <span className="on">
        <i>💡</i> I'm on on!
      </span>
      {/* When the state is off */}{" "}
      <span className="off">
        <i>💡</i> I'm on off!
      </span>
    </button>
  );
}

export default LightSwitchButton;
