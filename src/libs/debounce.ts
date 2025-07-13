export function debounce<F extends (...args: any[]) => any>(fn: F, delay: number) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  // 반환할 함수 타입은 원본 fn과 동일
  return function (this: ThisParameterType<F>, ...args: Parameters<F>) {
    // 이미 예약된 타이머가 있으면 취소
    if (timer !== null) {
      clearTimeout(timer);
    }

    // this 바인딩과 인자 전달을 위해 arrow가 아닌 function 사용
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, delay);
  } as (...args: Parameters<F>) => void;
}
