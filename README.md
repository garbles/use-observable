# useObservable

Allows dereferencing of Observables (see [RxJS](https://rxjs-dev.firebaseapp.com/)) using [React hooks](https://reactjs.org/docs/hooks-intro.html).

## Install

```
yarn add use-observable
```

## Use

This package exports a single function `useObservable<T>(obs: Observable<T>, defaultValue: T): T`.

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { interval } from "rxjs";
import useObservable from "use-observable";

const intCounter = interval(1000);

const App = () => {
  const [count, setCount] = React.useState(0);
  const obsCount = useObservable(intCounter, 0);

  return (
    <div>
      <div>The observable count is: {obsCount}</div>
      <div>The click counter is: {count}</div>
      <div>The total count is: {obsCount + count}</div>
      <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
```
