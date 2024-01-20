import { Container, Typo } from '@/atoms';
import { Profile } from '@/constants';

export default function ProfileIntro() {
  return (
    <Container className="w-full animate-[fadeInUp_0.5s_ease_0.6s_forwards]" type="profile">
      <Typo className="mb-4 block break-all p-2 text-lg">{Profile.ProfileIntro[0]}</Typo>
      <Typo className="block p-2 text-lg">{Profile.ProfileIntro[1]}</Typo>
    </Container>
  );
}
