import { useRef } from 'react';

export const useOnMouseWithDelay = (action: () => void, delay = 200) => {
  const timer = useRef<NodeJS.Timeout | null>(null);
  const onMouseEnter = () => {
    timer.current = setTimeout(() => {
      action();
    }, delay);
  };

  const onMouseLeave = () => {
    if (timer.current) clearTimeout(timer.current);
  };

  return { onMouseEnter, onMouseLeave };
};
