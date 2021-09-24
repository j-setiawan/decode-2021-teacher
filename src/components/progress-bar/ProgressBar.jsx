import React from "react";
import Filler from "./Filler";
import "./ProgressBar.css";

const ProgressBar = (props) => {
  let percentage = 0;
  if (props.percentage) {
    percentage = props.percentage;
  }
  return (
    <div className="ProgressBar">
      <Filler percentage={percentage} />
    </div>
  );
};
export default ProgressBar;
