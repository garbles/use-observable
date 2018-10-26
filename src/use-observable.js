import { useState, useEffect } from "react";

export default (observable, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(
    () => {
      const subscription = observable.subscribe(setValue);
      return () => subscription.unsubscribe();
    },
    [observable]
  );

  return value;
};
