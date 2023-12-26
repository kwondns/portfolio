import Link from 'next/link';
import ProfileContainer from '@/components/atoms/profileContainer/profileContainer';
import { introChildCss, introCss, nameCss, pCss } from '@/styles/profile.css';
import { containerCss } from '@/styles/layout.css';
import Stepper from '@/components/molecules/stepper';
import Container from '@/components/atoms/base/container';
import IconBase from '@/components/atoms/base/iconBase';

export default function ProfilePage() {
  const stepperText = [
    '교내 정보보안동아리 활동 2015-2017',
    '육군 CERT 2017-2018',
    '한국생산기술연구원 연구원 2020',
    '홍익대학교 빅데이터 개발자 청년인재 양성사업 2021',
    '(주)SPASS 현장실습 및 인턴 2021',
  ];

  return (
    <Container className={containerCss}>
      <h1 className={nameCss}>Kwon HanJun</h1>
      <ProfileContainer>
        <p className={introCss}>
          <IconBase className={introChildCss}>person</IconBase>96. 07. 18
        </p>
        <p className={introCss}>
          <IconBase className={introChildCss}>school</IconBase>홍익대학교 세종캠퍼스 컴퓨터정보통신공학과
        </p>
        <p className={introCss}>
          <IconBase className={introChildCss}>computer</IconBase>Front-End, Back-End, Full-Stack
        </p>
        <p className={introCss}>
          <IconBase className={introChildCss}>reorder</IconBase>육군 정보보호병 병장 전역
        </p>
        <p className={introCss}>
          <IconBase className={introChildCss}>mail</IconBase> kwon96718@gmail.com
        </p>
        <p className={introCss}>
          <Link href="https://github.com/kwondns" target="_blink">
            <IconBase className={introChildCss}>link</IconBase>https://github.com/kwondns
          </Link>
        </p>
      </ProfileContainer>
      <ProfileContainer>
        <Stepper texts={stepperText} />
      </ProfileContainer>
      <ProfileContainer>
        <p className={pCss}>
          정보 보안에 관심을 갖고 해당 분야의 공부와 경험을 쌓았다가 개발자로 전향을 하였습니다. 생각지 못했던 오류를
          해결했을 때 오는 성취감이 개발자로 전향하는 큰 계기가 되었습니다. 동아리 내 웹 페이지 제작, 알바 형태로 외국인
          대상으로 한 모 도시 축제의 웹 페이지 제작과 같은 경험을 토대로 웹 개발자가 되기로 결정했습니다.
        </p>
        <p className={pCss}>
          스타트업 회사, 연구원 같은 다양한 분위기의 조직에서 경험을 해보아 어느 환경에서도 적응을 할 자신이 있습니다.
          Front-End뿐 아니라 Back-End 및 인프라까지 관심이 있어 실제 서비스를 하고 있는 홈페이지를 제작 및 배포까지 해본
          경험을 토대로 실무에서도 적용할 수 있는 점이 저의 강점이 되어 주었습니다.
        </p>
      </ProfileContainer>
    </Container>
  );
}
