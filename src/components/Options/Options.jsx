import React from "react";
import css from "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => (
  <div>
    <h2>Leave your feedback</h2>
    <button onClick={() => onLeaveFeedback("good")}>Good</button>
    <button onClick={() => onLeaveFeedback("neutral")}>Neutral</button>
    <button onClick={() => onLeaveFeedback("bad")}>Bad</button>
    {totalFeedback > 0 && <button onClick={onReset}>Reset</button>}
  </div>
);

export default Options;
