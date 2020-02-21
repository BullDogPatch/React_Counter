import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  console.log(useState());

  // const increment = () => {
  //   setCount(count + 1);
  // }

  // const timesFive = () => {
  //   setCount(count * 5);
  // }

  // const reset = () => {
  //   setCount(0)
  // }

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        You clicked <span>{count}</span> times
      </p>
      <div className="button_container">
        <button onClick={() => setCount(count + 1)}> Add 1 </button>
        <button onClick={() => setCount(count * 5)}> Mulitply by 5 </button>
        <button onClick={() => setCount(0)}> Reset </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
