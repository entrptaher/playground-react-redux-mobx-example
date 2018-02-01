import React from "react";
import { render } from "react-dom";

const Title = props => {
  return <div>{props.self.state.title}</div>;
};

const Form = props => {
  return (
    <div>
      <input
        value={props.self.state.title}
        onChange={props.self.changeValue}
      />
    </div>
  );
};

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello React"
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.setState({ title: event.target.value });
  }

  render() {
   return [<Title self={this} />, <Form self={this} />];
  }
}

render(<App />, document.getElementById("root"));
