import React from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className="SectionWrapper">
      {title && <h1>{title} </h1>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  title: '',
};

export default Section;
