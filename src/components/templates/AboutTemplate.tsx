import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

import { Div } from '@/atoms';

export default function AboutTemplate() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.fromTo(
        '#sw-js-blob-svg',
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '50% 45%',
            scrub: 1,
          },
          opacity: 1,
          scale: 0.5,
        },
        {
          opacity: 0.7,
          scale: 1.3,
          rotate: '25deg',
          scrollTrigger: {
            trigger: '#sw-js-blob-svg',
            start: '50% center',
            end: '100% 0%',
            scrub: 1,
          },
        },
      );
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '60% 50%',
            end: '100% 20%',
            scrub: 1,
          },
        })
        .to('.letter-1', { x: -150, y: 250, rotate: 25, ease: 'none', duration: 5, opacity: 0.7 }, 0)
        .to('.letter-2', { x: -150, y: 150, rotate: 25, ease: 'none', duration: 5, opacity: 0.7 }, 0)
        .to('.letter-3', { x: -100, y: 200, rotate: -10, ease: 'none', duration: 5, opacity: 0.7 }, 0)
        .to('.letter-4', { x: -150, y: 120, rotate: 15, ease: 'none', duration: 5, opacity: 0.7 }, 0)
        .to('.letter-5', { x: 15, y: 250, rotate: 5, ease: 'none', duration: 5, opacity: 0.7 }, 0)
        .to('.letter-6', { x: 50, y: 150, rotate: 10, ease: 'none', duration: 5, opacity: 0.7 }, 0)
        .to('.letter-7', { x: 120, y: 250, rotate: -25, ease: 'none', duration: 5, opacity: 0.7 }, 0)
        .to('.letter-8', { x: 150, y: 50, rotate: -15, ease: 'none', duration: 5, opacity: 0.7 }, 0)
        .to('.letter-9', { x: 150, y: 150, rotate: -30, ease: 'none', duration: 5, opacity: 0.7 }, 0);
      gsap
        .timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: '100% 100%',
            end: '100% 50%',
            scrub: 1,
          },
        })
        .to('.my-name', { scale: 1.5 });
    },
    { scope: sectionRef },
  );
  return (
    <section
      className="relative grid h-screen grid-rows-2 flex-col items-center gap-y-1 overflow-x-clip"
      id="about"
      ref={sectionRef}
    >
      <Div className="my-name col-start-1 col-end-2 row-start-1 row-end-2 translate-x-[25%] justify-start place-self-center text-3xl uppercase tracking-tight md:text-7xl">
        <p>Kwon</p>
        <p>HanJun</p>
      </Div>
      <svg
        className="max-w-screen -z-10 col-start-1 col-end-2 row-start-1 row-end-2 scale-50 opacity-0"
        id="sw-js-blob-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop id="stop1" stopColor="rgba(90.842, 55, 248, 1)" offset="0%" />
            <stop id="stop2" stopColor="rgba(47.888, 90.45, 112.256, 1)" offset="100%" />
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient)"
          d="M26.9,-26.5C34,-26.2,38.2,-16.8,35.8,-9.5C33.4,-2.1,24.2,3.3,18.4,8C12.6,12.7,10.1,16.8,5.2,21.8C0.3,26.8,-6.9,32.9,-15.3,33.5C-23.8,34.2,-33.4,29.5,-36.1,22.1C-38.8,14.8,-34.5,4.7,-30.3,-3C-26.1,-10.6,-22,-15.9,-16.9,-16.6C-11.9,-17.3,-5.9,-13.4,2,-15.8C9.9,-18.2,19.9,-26.8,26.9,-26.5Z"
          width="100%"
          height="100%"
          transform="translate(50 50)"
          strokeWidth="0"
          style={{ transition: 'all 0.3s ease 0s' }}
          stroke="url(#sw-gradient)"
        />
      </svg>
      <Div className="letter-box -z-10 flex justify-center font-Kanit text-3xl tracking-wider md:text-9xl">
        <span className="letter-1 block text-indigo-600">P</span>
        <span className="letter-2 blcok text-slate-500">O</span>
        <span className="letter-3 blcok text-amber-700 dark:text-zinc-300">R</span>
        <span className="letter-4 blcok text-blue-300">T</span>
        <span className="letter-5 blcok text-slate-400">F</span>
        <span className="letter-6 blcok text-indigo-500">O</span>
        <span className="letter-7 blcok text-slate-500">L</span>
        <span className="letter-8 blcok text-amber-700 dark:text-zinc-300">I</span>
        <span className="letter-9 blcok text-indigo-300">O</span>
      </Div>
    </section>
  );
}
