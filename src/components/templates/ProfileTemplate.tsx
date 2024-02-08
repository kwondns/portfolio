import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { gsap } from 'gsap';

import { Typo } from '@/atoms';
import { Stepper, ProfileInfo, ProfileIntro } from '@/molecules';

export default function ProfileTemplate() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  useGSAP(
    () => {
      gsap.utils.toArray<Element>('.card').forEach((element) => {
        gsap
          .timeline({
            scrollTrigger: { trigger: element, start: '100% 100%', end: '100% 100%', scrub: true },
          })
          .fromTo(element, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 3 }, 0);
      });
    },
    { scope: sectionRef },
  );
  return (
    <section className="mx-auto mt-32 flex min-h-screen flex-col" id="profile" ref={sectionRef}>
      <Typo className="ml-10 text-6xl">Kwon HanJun</Typo>
      <ProfileInfo />
      <Stepper />
      <ProfileIntro />
    </section>
  );
}
