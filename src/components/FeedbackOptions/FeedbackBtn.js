import React from "react";
import PropTypes from "prop-types";
import "./FeedbackOptions.css";

const FeedbackBtn = ({ options, feedbackClick }) => {
  return (
    <>
      {options.map((option) => (
        <button
          className="FeedbackOption_button"
          type="button"
          key={option}
          onClick={feedbackClick}
        >
          {option}
        </button>
      ))}
    </>
  );
};

FeedbackBtn.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  feedbackClick: PropTypes.func.isRequired,
};

export default FeedbackBtn;
