import Link from 'next/link';
import CardProfile from '@/components/atoms/cardProfile';
import { introChildCss, introCss, nameCss, pCss, rightTextCss } from '@/styles/profile.css';
import { containerCss } from '@/styles/layout.css';

export default function ProfilePage() {
  return (
    <div className={containerCss}>
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
        <p className={`${introCss} ${rightTextCss}`}>교내 정보보안동아리 활동 2015-2017</p>
        <p className={`${introCss} ${rightTextCss}`}>육군 CERT 2017-2018</p>
        <p className={`${introCss} ${rightTextCss}`}>한국생산기술연구원 연구원 2020</p>
        <p className={`${introCss} ${rightTextCss}`}>홍익대학교 빅데이터 개발자 청년인재 양성사업 2021</p>
        <p className={`${introCss} ${rightTextCss}`}>(주)SPASS 현장실습 및 인턴 2021</p>
      </CardProfile>
      <CardProfile>
        <p className={pCss}>
          정보보안에 관심을 갖고 해당 분야의 공부와 경험을 쌓았다가 개발자로 전향을 하였습니다. 생각치 못했던 오류를
          해결 했을 때 오는 성취감이 개발자로 전향하는 큰 계기가 되었습니다.
        </p>
        <p className={pCss}>
          동아리, 연구원, 스타트업, 군 이라는 폐쇠된 분위기의 조직까지 다양한 조직에 속하여 적응력을 키워 어느 조직에
          들어가도 적응을 할 수 있습니다. Front-End뿐 아니라 Back-End 및 인프라까지 관심이 있어 실제 서비스를 하고있는
          홈페이지를 제작 및 배포까지 해본 경험이 저의 강점이 되어 주었습니다.
        </p>
      </CardProfile>
    </div>
  );
}
