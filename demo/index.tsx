import React from "react";
import ReactDOM from "react-dom";
import { interval, BehaviorSubject } from "rxjs";
import useObservable from "../src";

const createBehaviorCounter = () => {
  let i = 0
  const $ = new BehaviorSubject(i)
  interval(1000).subscribe(() => {
    $.next(i)
    i++
  })
  return $
}

const counter = interval(1000)
const behaviorCounter = createBehaviorCounter()

const App = () => {
  const a = useObservable(counter, 0);
  const b = useObservable(behaviorCounter);

  return (
    <div>
      <div>Counter A: {a}</div>
      <div>Counter B: {b}</div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
