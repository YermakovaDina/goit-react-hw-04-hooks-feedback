import React from 'react';
import PropTypes from 'prop-types';
import FeedbackOptionItem from './FeedbackOptionItem';

const FeedbackOptions = ({ options, handleClick }) => {
  return (
    <>
      {options.map((item, i) => (
        <FeedbackOptionItem
          key={i}
          item={item}
          name={item}
          handleClick={handleClick}
        />
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
