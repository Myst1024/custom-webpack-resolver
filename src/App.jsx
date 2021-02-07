import React, { Fragment } from "react";
import Component from "./deeply/nested/Component";

const App = ({ mood }) => {
  return (
    <Fragment>
      <h3>Hello, {mood}</h3>
      <Component></Component>
    </Fragment>
  );
};
export default App;
