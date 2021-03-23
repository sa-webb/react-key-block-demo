import React from "react";
import Components from "./components.js";

import "./styles.css";

const data = {
  content: {
    body: [
      {
        _uid: "BUY6Drn9e1",
        component: "foo",
        headline: "Foo 1"
      },
      {
        _uid: "X1JAfdsZxy",
        component: "foo",
        headline: "Foo 2"
      },
      {
        _uid: "gJZoSLkfZV",
        component: "bar",
        title: "Bar 1"
      },
      {
        _uid: "X1JAfdsZxy",
        component: "foo",
        headline: "Foo 3"
      },
    ]
  }
};

function App() {
  return (
    <div className="App">
      {data.content.body.map(block => Components(block))}
    </div>
  );
}

export default App