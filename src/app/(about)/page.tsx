import {
  blueColorCss,
  captionCss,
  codeContainerCss,
  containerCss,
  firstCss,
  fourthCss,
  greenColorCss,
  orangeColorCss,
  secondCss,
  thirdCss,
  typingCss,
  whiteColorCss,
  yellowColorCss,
} from '@/styles/app.css';
import Container from '@/components/atoms/container';

export default function Page() {
  return (
    <Container className={containerCss}>
      <Container className={codeContainerCss}>
        <span className={captionCss}>1 usage new *</span>
        <span className={`${orangeColorCss} ${typingCss}`}>
          export default function<span className={yellowColorCss}>{` Me() {`}</span>
        </span>
        <span className={`${orangeColorCss} ${firstCss}`}>
          return<span className={yellowColorCss}> (</span>
        </span>
        <span className={`${yellowColorCss} ${secondCss}`}>{`<KwonHanJun>`}</span>
        <span className={`${greenColorCss} ${thirdCss}`}>
          {`<짧은 소개>`}
          <span className={whiteColorCss}>최신 기술 트렌드를 받아들이고 적용하고자 하는 노력형 개발자.</span>
          {`</짧은 소개>`}
        </span>
        <span className={`${greenColorCss} ${thirdCss}`}>{`<하고 싶은 일>`}</span>
        <span className={`${blueColorCss} ${fourthCss}`}>{`<FrontEnd-Developer />`}</span>
        <span className={`${blueColorCss} ${fourthCss}`}>{`<BackEnd-Developer />`}</span>
        <span className={`${blueColorCss} ${fourthCss}`}>{`<FullStack-Developer />`}</span>
        <span className={`${greenColorCss} ${thirdCss}`}>{`</하고싶은일>`}</span>
        <span className={`${greenColorCss} ${thirdCss}`}>{`<MyStack>`}</span>
        <span className={`${blueColorCss} ${fourthCss}`}>{`<React.JS />`}</span>
        <span className={`${blueColorCss} ${fourthCss}`}>{`<Next.JS />`}</span>
        <span className={`${blueColorCss} ${fourthCss}`}>{`<Express.JS />`}</span>
        <span className={`${blueColorCss} ${fourthCss}`}>{`<MongoDB />`}</span>
        <span className={`${blueColorCss} ${fourthCss}`}>{`<ETC />`}</span>
        <span className={`${greenColorCss} ${thirdCss}`}>{`</MyStack>`}</span>
        <span className={`${yellowColorCss} ${secondCss}`}>{`</KwonHanJun>`}</span>
        <span className={`${yellowColorCss} ${firstCss}`}>
          )<span className={orangeColorCss}>;</span>
        </span>
        <span className={yellowColorCss}>{`}`}</span>
      </Container>
    </Container>
  );
}
