import React from 'react';
import PropTypes from 'prop-types';
import Notification from 'components/Notification';

const Statistics = ({ title, options, total = 0, positivePercentage = 0 }) =>
  total === 0 ? (
    <Notification message="No feedback given"></Notification>
  ) : (
    <div className="StatisticsWrapper">
      <h1>{title}</h1>
      <ul>
        {options.map((item, i) => (
          <li key={i}>
            {item[0]}: {item[1]}
          </li>
        ))}
      </ul>
      <p>
        Total: <b>{total}</b>
      </p>
      <p>
        Positive feedback: <b>{positivePercentage}</b>%
      </p>
    </div>
  );

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.array.isRequired),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
