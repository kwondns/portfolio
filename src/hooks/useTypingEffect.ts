// hooks/useTypingEffect.ts
'use client';

import { useEffect, useRef, useState } from 'react';

export function useTypingEffect(
  texts: string[],
  typingSpeed = 50,
  erasingSpeed = 30,
  pauseAfterTyping = 1000,
  pauseAfterErasing = 500,
) {
  const [displayText, setDisplayText] = useState('');
  const [phase, setPhase] = useState<'typing' | 'erasing'>('typing');
  const indexRef = useRef(0);
  const charRef = useRef(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'typing') {
      // 글자 하나씩 타이핑
      if (charRef.current < texts[indexRef.current].length) {
        timer = setTimeout(() => {
          charRef.current += 1;
          setDisplayText(texts[indexRef.current].slice(0, charRef.current));
        }, typingSpeed);
      } else {
        // 타이핑 완료 후 잠시 대기 → 지우기 단계로 전환
        timer = setTimeout(() => setPhase('erasing'), pauseAfterTyping);
      }
    } else {
      // 글자 하나씩 지우기
      if (charRef.current > 0) {
        timer = setTimeout(() => {
          charRef.current -= 1;
          setDisplayText(texts[indexRef.current].slice(0, charRef.current));
        }, erasingSpeed);
      } else {
        // 지우기 완료 후 다음 텍스트로 전환 → 타이핑 단계
        indexRef.current = (indexRef.current + 1) % texts.length;
        timer = setTimeout(() => setPhase('typing'), pauseAfterErasing);
      }
    }

    return () => clearTimeout(timer);
  }, [phase, texts, typingSpeed, erasingSpeed, pauseAfterTyping, pauseAfterErasing]);

  return displayText;
}
