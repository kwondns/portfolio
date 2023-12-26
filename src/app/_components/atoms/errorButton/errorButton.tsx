import { errorButtonCss } from '@/components/atoms/errorButton/errorButton.css';

export default function ErrorButton({ reset }: { reset: () => void }) {
  return (
    <button className={errorButtonCss} type="button" onClick={reset}>
      다시 시도
    </button>
  );
}
