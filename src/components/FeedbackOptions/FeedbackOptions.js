import React from "react";
import { useState } from "react";

import FeedbackBtn from "./FeedbackBtn";
import Statistics from "../Statistics";
import Notification from "../Notification/Notification";

import PropTypes from "prop-types";

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const positivePercentage = () => {
    return Math.round(((good / countTotalFeedback()) * 1000) / 10) || 0;
  };

  const feedbackClick = (e) => {
    const value = e.target.textContent;
    // const feedbackElement = (prevState) => ({ [value]: prevState[value] + 1 });

    switch (value) {
      case "good":
        setGood(good + 1);
        break;

      case "neutral":
        setNeutral(neutral + 1);
        break;

      case "bad":
        setBad(bad + 1);
        break;

      default:
        return;
    }
  };

  const keys = Object.keys({ good, neutral, bad });

  return (
    <>
      <h1 className="">Please leave feedback</h1>

      <FeedbackBtn
        //options={["good", "neutral", "bad"]}
        options={keys}
        feedbackClick={feedbackClick}
      />

      <section>
        {countTotalFeedback() === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={positivePercentage()}
          />
        )}
      </section>
    </>
  );
}

Feedback.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positiveFeedback: PropTypes.func,
  feedbackClick: PropTypes.func,
};
