import { useEffect, useState } from 'react';

export default function useDevice() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width <= 1024) {
      setIsMobile(true);
    }

    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1024) setIsMobile(true);
      else setIsMobile(false);
    });

    window.removeEventListener('resize', () => {});
  }, []);

  return isMobile;
}
