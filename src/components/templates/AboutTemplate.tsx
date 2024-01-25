import { Div, CodeTypo } from '@/atoms';

export default function AboutTemplate() {
  return (
    <article className="mx-auto flex min-h-screen max-w-[800px] flex-col gap-y-1 pl-8" id="about">
      <Div className="flex flex-col [&>:not(.caption,.typing-code)]:animate-[fadeInUp_1s_ease_1.6s_forwards] [&>:not(.caption,.typing-code)]:opacity-0">
        <CodeTypo color="caption" indent={0} className="caption">
          1 usage new *
        </CodeTypo>
        <CodeTypo
          color="orange"
          indent={0}
          className="typing-code max-w-[28ch] animate-[typing_1.5s_steps(28)] overflow-hidden whitespace-nowrap"
        >
          export default function<CodeTypo color="yellow">{` Me() {`}</CodeTypo>
        </CodeTypo>
        <CodeTypo color="orange" indent={1}>
          return<CodeTypo color="yellow"> (</CodeTypo>
        </CodeTypo>
        <CodeTypo color="yellow" indent={2}>{`<KwonHanJun>`}</CodeTypo>
        <CodeTypo color="green" indent={3}>
          {`<짧은 소개>`}
          <CodeTypo color="white">최신 기술 트렌드를 받아들이고 적용하고자 하는 노력형 개발자.</CodeTypo>
          {`</짧은 소개>`}
        </CodeTypo>
        <CodeTypo color="green" indent={3}>{`<하고 싶은 일>`}</CodeTypo>
        <CodeTypo color="blue" indent={4}>{`<FrontEnd-Developer />`}</CodeTypo>
        <CodeTypo color="blue" indent={4}>{`<BackEnd-Developer />`}</CodeTypo>
        <CodeTypo color="blue" indent={4}>{`<FullStack-Developer />`}</CodeTypo>
        <CodeTypo color="green" indent={3}>{`</하고싶은일>`}</CodeTypo>
        <CodeTypo color="green" indent={3}>{`<MyStack>`}</CodeTypo>
        <CodeTypo color="blue" indent={4}>{`<React.JS />`}</CodeTypo>
        <CodeTypo color="blue" indent={4}>{`<Next.JS />`}</CodeTypo>
        <CodeTypo color="blue" indent={4}>{`<Express.JS />`}</CodeTypo>
        <CodeTypo color="blue" indent={4}>{`<MongoDB />`}</CodeTypo>
        <CodeTypo color="blue" indent={4}>{`<ETC />`}</CodeTypo>
        <CodeTypo color="green" indent={3}>{`</MyStack>`}</CodeTypo>
        <CodeTypo color="yellow" indent={2}>{`</KwonHanJun>`}</CodeTypo>
        <CodeTypo color="yellow" indent={1}>
          )<CodeTypo color="orange">;</CodeTypo>
        </CodeTypo>
        <CodeTypo color="yellow">{`}`}</CodeTypo>
      </Div>
    </article>
  );
}
