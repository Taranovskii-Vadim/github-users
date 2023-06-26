import { useCallback, useRef } from 'react';

type Cb<T> = (value: T) => void;

export const useDebounce = <T>(callback: Cb<T>, delay: number): Cb<T> => {
  const timer = useRef<number>();

  const result = useCallback(
    (value: T) => {
      if (timer.current) window.clearTimeout(timer.current);

      timer.current = window.setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay],
  );

  return result;
};
