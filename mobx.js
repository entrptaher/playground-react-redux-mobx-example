import React from "react";
import { render } from "react-dom";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import autobind from "react-autobind";

// prepare our store (to store the data)
class Store {
  constructor() {
    // no more arrow functions everywhere
    autobind(this);
  }

  // look out for title to be updated
  @observable title = "Hello Mobx";

  @action
  updateTitle(event) {
    this.title = event.target.value;
  }
}

// observe the title for change (if needed)
const Title = observer(props => {
  return <div>{store.title}</div>;
});

// observe the form for change
const Form = observer(props => {
  return (
    <div>
      <input 
        value={store.title} 
        onChange={store.updateTitle} 
      />
    </div>
  );
});

// mashup the components
const App = observer(() => [<Title />, <Form />]);

// create store
const store = new Store();

// render everything
render(<App />, document.getElementById("root"));
