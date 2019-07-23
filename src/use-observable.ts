import { useState, useEffect } from "react";
import { Subscribable, BehaviorSubject } from 'rxjs'

const getDefaultValue = <T>(
  subscribable: Subscribable<T>
): T | undefined => {
  if (!(subscribable instanceof BehaviorSubject)) {
    return
  }
  return subscribable.value
}

export const useObservable = <T>(
  subscribable: Subscribable<T>, 
  defaultValue?: T
): T | undefined => {
  const [ value, setValue ] = useState(defaultValue || getDefaultValue(subscribable));

  useEffect(
    () => {
      const subscription = subscribable.subscribe(setValue);
      return () => subscription.unsubscribe();
    },
    [subscribable]
  );

  return value;
};
