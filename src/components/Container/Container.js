import React from 'react';
import PropTypes from 'prop-types';
//styles
import './Container.css';

const Container = ({ title, children }) => {
  return (
    <div className="ContainerWrapper">
      {title && <h1>{title} </h1>}

      <div>{children}</div>
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  title:PropTypes.string,
};

Container.defaultProps = {
  title:''
};

export default Container;
