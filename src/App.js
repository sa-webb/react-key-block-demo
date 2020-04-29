import React from "react";
import Components from "./components.js";

import "./styles.css";

const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "foo",
        headline: "Foo"
      },
      {
        _uid: "gJZoSLkfZV",
        component: "bar",
        title: "Bar"
      },
      {
        _uid: "X1JAfdsZxy",
        component: "foo",
        headline: "Another headline"
      },
      {
        _uid: "X1JAfdsZxy",
        component: "foo",
        headline: "Another head"
      }
    ]
  }
};

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {data.content.body.map(block => Components(block))}
    </div>
  );
}

export default App