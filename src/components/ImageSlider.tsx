// @ts-ignore
'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { debounce } from '@/libs/debounce';
type ImageSliderProps = {
  images: string[];
};
export default function ImageSlider(props: ImageSliderProps) {
  const { images } = props;
  const [current, setCurrent] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  // debounced 스크롤 완료 콜백
  const handleScrollEnd = debounce(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const width = slider.clientWidth;
    const newIndex = Math.round(slider.scrollLeft / width);
    setCurrent(newIndex);
  }, 100); // 100ms 동안 추가 스크롤이 없으면 완료로 간주

  // 스크롤 이벤트 한 번만 등록
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    slider.addEventListener('scroll', handleScrollEnd, { passive: true });
    return () => {
      slider.removeEventListener('scroll', handleScrollEnd);
    };
  }, [handleScrollEnd]);

  // current 변경 시 프로그래밍 스크롤
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const width = slider.clientWidth;
    slider.scrollTo({ left: current * width, behavior: 'smooth' });
  }, [current]);
  return (
    <>
      <div ref={sliderRef} className="flex h-[50dvh] overflow-x-auto snap-x snap-mandatory scroll-smooth">
        {images.map((image, idx) => {
          return (
            <div key={image} className="relative flex-shrink-0 w-full h-full snap-start">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`}
                alt={image}
                fill
                className="object-contain bg-text/10"
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 80vw, (max-width: 1200px) 60vw, 800px"
                priority={idx === 0}
              />
            </div>
          );
        })}
      </div>
      <div className="flex gap-2 p-4 overflow-x-auto snap-x snap-mandatory">
        {images.map((image, idx) => (
          <button
            key={image}
            onClick={() => setCurrent(idx)}
            className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
              idx === current ? 'border-primary scale-105' : 'border-border hover:border-secondary'
            } snap-start`}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`}
              alt={`썸네일 ${idx + 1}`}
              fill
              className="object-cover"
              sizes="80px"
              loading="lazy"
            />
          </button>
        ))}
      </div>
    </>
  );
}
