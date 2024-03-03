import { useCallback, useState } from 'react';

export default function useToggle(initialState: boolean): IUseToggle {
  const [state, setState] = useState<boolean>(initialState);

  const setTrue = useCallback(() => setState(true), []);
  const setFalse = useCallback(() => setState(false), []);
  const toggle = useCallback(() => setState((value) => !value), []);

  return [state, { setTrue, setFalse, toggle }];
}

export type IUseToggle = [
  boolean,
  {
    setTrue: VoidFunction;
    setFalse: VoidFunction;
    toggle: VoidFunction;
  },
];
