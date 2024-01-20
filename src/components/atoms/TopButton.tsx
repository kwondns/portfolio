import { Button } from '@/atoms';

type TopButtonProps = {
  onClickTopButton: () => void;
};
export default function TopButton(props: TopButtonProps) {
  const { onClickTopButton } = props;
  return (
    <Button
      className="group fixed bottom-5 right-5 rounded-full border-2 border-slate-700 p-2 transition hover:border-slate-500 hover:bg-slate-300 dark:border-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800 md:bottom-10 md:right-10 "
      onClick={onClickTopButton}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6 stroke-slate-700 transition group-hover:stroke-slate-500 dark:stroke-slate-300 group-hover:dark:stroke-slate-500"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
      </svg>
    </Button>
  );
}
