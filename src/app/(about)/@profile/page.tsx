import Link from 'next/link';
import CardProfile from '@/components/atoms/cardProfile';
import { introChildCss, introCss, nameCss, pCss } from '@/styles/profile.css';
import { containerCss } from '@/styles/layout.css';
import Stepper from '@/components/molecules/stepper';
import Container from '@/components/atoms/container';

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
      <CardProfile>
        <p className={introCss}>
          <span className={`${introChildCss} material-symbols-outlined`}>person</span>96. 07. 18
        </p>
        <p className={introCss}>
          <span className={`${introChildCss} material-symbols-outlined`}>school</span>홍익대학교 세종캠퍼스
          컴퓨터정보통신공학과
        </p>
        <p className={introCss}>
          <span className={`${introChildCss} material-symbols-outlined`}>computer</span>Front-End, Back-End, Full-Stack
        </p>
        <p className={introCss}>
          <span className={`${introChildCss} material-symbols-outlined`}>reorder</span>육군 정보보호병 병장 전역
        </p>
        <p className={introCss}>
          <span className={`${introChildCss} material-symbols-outlined`}>mail</span> kwon96718@gmail.com
        </p>
        <p className={introCss}>
          <Link href="https://github.com/kwondns" target="_blink">
            <span className={`${introChildCss} material-symbols-outlined`}>link</span>https://github.com/kwondns
          </Link>
        </p>
      </CardProfile>
      <CardProfile>
        <Stepper texts={stepperText} />
      </CardProfile>
      <CardProfile>
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
      </CardProfile>
    </Container>
  );
}
