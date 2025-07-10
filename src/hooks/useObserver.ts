import { RefObject, useEffect, useState } from 'react';

export function useObserver(element: RefObject<HTMLDivElement> | null) {
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (!element?.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsShow(true);
          } else setIsShow(false);
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      },
    );
    observer.observe(element.current);
    return () => observer.disconnect();
  }, [element]);
  return isShow;
}
