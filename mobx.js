import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

class Store {
  @observable title = "Hello Mobx";

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }
}

const Title = observer(props => {
  return <div>{store.title}</div>;
});

const Form = observer(props => {
  return (
    <div>
      <input value={store.title} onChange={store.updateTitle} />
    </div>
  );
});

@observer
class App extends React.Component {
  render() {
    return [<Title />, <Form />];
  }
}

const store = new Store();
render(<App />, document.getElementById("root"));
