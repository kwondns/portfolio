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
import Container from '@/components/atoms/base/container';
import SpanBase from '@/components/atoms/base/spanBase';

export default function Page() {
  return (
    <Container className={containerCss}>
      <Container className={codeContainerCss}>
        <SpanBase className={captionCss}>1 usage new *</SpanBase>
        <SpanBase className={`${orangeColorCss} ${typingCss}`}>
          export default function<SpanBase className={yellowColorCss}>{` Me() {`}</SpanBase>
        </SpanBase>
        <SpanBase className={`${orangeColorCss} ${firstCss}`}>
          return<SpanBase className={yellowColorCss}> (</SpanBase>
        </SpanBase>
        <SpanBase className={`${yellowColorCss} ${secondCss}`}>{`<KwonHanJun>`}</SpanBase>
        <SpanBase className={`${greenColorCss} ${thirdCss}`}>
          {`<짧은 소개>`}
          <SpanBase className={whiteColorCss}>최신 기술 트렌드를 받아들이고 적용하고자 하는 노력형 개발자.</SpanBase>
          {`</짧은 소개>`}
        </SpanBase>
        <SpanBase className={`${greenColorCss} ${thirdCss}`}>{`<하고 싶은 일>`}</SpanBase>
        <SpanBase className={`${blueColorCss} ${fourthCss}`}>{`<FrontEnd-Developer />`}</SpanBase>
        <SpanBase className={`${blueColorCss} ${fourthCss}`}>{`<BackEnd-Developer />`}</SpanBase>
        <SpanBase className={`${blueColorCss} ${fourthCss}`}>{`<FullStack-Developer />`}</SpanBase>
        <SpanBase className={`${greenColorCss} ${thirdCss}`}>{`</하고싶은일>`}</SpanBase>
        <SpanBase className={`${greenColorCss} ${thirdCss}`}>{`<MyStack>`}</SpanBase>
        <SpanBase className={`${blueColorCss} ${fourthCss}`}>{`<React.JS />`}</SpanBase>
        <SpanBase className={`${blueColorCss} ${fourthCss}`}>{`<Next.JS />`}</SpanBase>
        <SpanBase className={`${blueColorCss} ${fourthCss}`}>{`<Express.JS />`}</SpanBase>
        <SpanBase className={`${blueColorCss} ${fourthCss}`}>{`<MongoDB />`}</SpanBase>
        <SpanBase className={`${blueColorCss} ${fourthCss}`}>{`<ETC />`}</SpanBase>
        <SpanBase className={`${greenColorCss} ${thirdCss}`}>{`</MyStack>`}</SpanBase>
        <SpanBase className={`${yellowColorCss} ${secondCss}`}>{`</KwonHanJun>`}</SpanBase>
        <SpanBase className={`${yellowColorCss} ${firstCss}`}>
          )<SpanBase className={orangeColorCss}>;</SpanBase>
        </SpanBase>
        <SpanBase className={yellowColorCss}>{`}`}</SpanBase>
      </Container>
    </Container>
  );
}
