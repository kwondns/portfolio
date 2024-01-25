import { RecoilRoot } from 'recoil';
import { useEffect } from 'react';

import Router from './router';

function App() {
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
