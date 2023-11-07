import Image from 'next/image';
import { stackButtonContainerCss, stackButtonSpanCss } from '@/components/atoms/stackButton.css';

export default function StackButton() {
  return (
    <div className={stackButtonContainerCss.front}>
      <Image src="/html5.png" alt="html5" width={60} height={60} />
      <span className={stackButtonSpanCss}>Express.JS</span>
    </div>
  );
}
