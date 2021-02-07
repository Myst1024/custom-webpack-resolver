import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import { one } from "./helpers";
import { mood } from "./deeply/nested/constants.js";

console.log("asdf");
one();

ReactDOM.render(<App mood={mood} />, document.getElementById("root"));
