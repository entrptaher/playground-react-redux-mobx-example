import React from "react";
import { render } from "react-dom";
import MobxApp from './mobx';

const App = () => {
  return [<MobxApp />]
}

// render everything
render(<App />, document.getElementById("root"));
