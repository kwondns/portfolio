import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Router from './router';

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}

export default App;
