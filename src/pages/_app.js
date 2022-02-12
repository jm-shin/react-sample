import React from 'react';
import PropTypes from 'prop-types';
import "antd/dist/antd.css";

const app = ({Component}) => {
  return (
      <>
         <Component/>
      </>
  )
}

app.propType = {
    Component: PropTypes.elementType.isRequired,
}

export default app;