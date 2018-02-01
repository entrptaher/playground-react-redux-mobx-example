import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";

const Store = (state = { title: "Hello Redux" }, action) => {
  switch (action.type) {
    case "updateTitle":
      state.title = action.event.target.value;
      return state;
    default:
      return state;
  }
};

const Title = props => {
  return <div>{store.getState().title}</div>;
};

const Form = props => {
  return (
    <div>
      <input
        value={store.getState().title}
        onChange={event => store.dispatch({ type: "updateTitle", event })}
      />
    </div>
  );
};

class App extends React.Component {
  render() {
    return [<Title />, <Form />];
  }
}

const renderView = () => render(<App />, document.getElementById("root"));
const store = createStore(Store);
renderView();
store.subscribe(renderView);
