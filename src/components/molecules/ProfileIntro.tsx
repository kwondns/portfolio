import { Container, Typo } from '@/atoms';
import { Profile } from '@/constants';

export default function ProfileIntro() {
  return (
    <Container className="card w-full" type="profile">
      {Profile.ProfileIntro.map((profile) => (
        <Typo className="block p-2 text-lg" key={profile}>
          {profile}
        </Typo>
      ))}
    </Container>
  );
}
