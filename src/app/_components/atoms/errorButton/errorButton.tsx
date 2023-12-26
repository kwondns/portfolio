import { errorButtonCss } from '@/components/atoms/errorButton/errorButton.css';
import ButtonBase from '@/components/atoms/base/buttonBase';

export default function ErrorButton({ reset }: { reset: () => void }) {
  return (
    <ButtonBase className={errorButtonCss} onClick={reset}>
      다시 시도
    </ButtonBase>
  );
}
