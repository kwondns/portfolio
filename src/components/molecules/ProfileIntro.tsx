import { Container, Typo } from '@/atoms';
import { Profile } from '@/constants';

export default function ProfileIntro() {
  return (
    <Container className="card w-full" type="profile">
      <Typo className="mb-4 block break-all p-2 text-lg">{Profile.ProfileIntro[0]}</Typo>
      <Typo className="block p-2 text-lg">{Profile.ProfileIntro[1]}</Typo>
    </Container>
  );
}
