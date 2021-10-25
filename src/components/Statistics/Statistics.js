import React from "react";
import PropTypes from "prop-types";
import Notification from "../Notification/Notification";

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positiveFeedback = 0,
}) => {
  return total === 0 ? (
    <Notification message="No feedback given"></Notification>
  ) : (
    <div className="StatisticsWrapper">
      <h1>Statistics:</h1>
      <ul>
        <li>
          Good: <b>{good}</b>
        </li>
        <li>
          Neutral: <b>{neutral}</b>
        </li>
        <li>
          Bad: <b>{bad}</b>
        </li>
        <li>
          Total: <b>{total}</b>
        </li>
        <li>
          Positive feedback: <b>{positiveFeedback}</b>%
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positiveFeedback: PropTypes.number,
};

export default Statistics;
