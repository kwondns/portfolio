import { Suspense, useEffect, useState } from 'react';

import { StackByTech, StackByTechMobile, StackOthers } from '@/organisms';
import { Spinner } from '@/atoms';

export default function StackTemplate() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const setVh = () => {
      setIsMobile(window.innerWidth < 980);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <article id="stack">
      <Suspense fallback={<Spinner />}>
        <span className="font-Kanit text-2xl font-bold">Recently Used Stack</span>
        {isMobile ? (
          <>
            <StackByTechMobile tech="front" />
            <StackByTechMobile tech="back" />
            <StackByTechMobile tech="etc" />
          </>
        ) : (
          <StackByTech />
        )}
        <StackOthers />
      </Suspense>
    </article>
  );
}
