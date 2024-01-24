import SyntaxHighlight from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function code(props: any) {
  const { node, className, ...others } = props;
  const match = /language-(\w+)/.exec(className || '');

  return match ? (
    <SyntaxHighlight {...others} PreTag="div" language={match[1]} style={dark} />
  ) : (
    <code className="m-1 rounded-3xl bg-red-400/60 px-2 py-1 text-sm" {...others} />
  );
}
