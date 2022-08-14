import React from 'react';
import PropTypes from 'prop-types';
import "antd/dist/antd.css";
import {Head} from "next/document";

import wrapper from "../store/configureStore";

const app = ({Component}) => {
  return (
      <>
          <Head>
              <meta charSet="utf-8"/>
              <title>App</title>
          </Head>
         <Component/>
      </>
  );
}

app.propType = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(app);