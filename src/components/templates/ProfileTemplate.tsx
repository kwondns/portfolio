import { Typo } from '@/atoms';
import { Stepper, ProfileInfo, ProfileIntro } from '@/molecules';

export default function ProfileTemplate() {
  return (
    <article className="mx-auto flex flex-col " id="profile">
      <Typo className="text-5xl">Kwon HanJun</Typo>
      <ProfileInfo />
      <Stepper />
      <ProfileIntro />
    </article>
  );
}
