import React from "react";
import ReactDOM from "react-dom";
import { interval } from "rxjs";
import useObservable from "../src/use-observable";

const numbers = interval(1000);

const App = () => {
  const [count, setCount] = React.useState(0);
  const number = useObservable(numbers, 0);

  return (
    <div>
      <div>The observable count is: {number}</div>
      <div>The click counter is: {count}</div>
      <div>The total count is: {number + count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
