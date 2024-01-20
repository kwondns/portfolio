import { Div, Stack, Typo } from '@/atoms';
import { StackType } from '@/types';

type StackByCategoryProps = StackType.StackCategoryType;
export default function StackByCategory(props: StackByCategoryProps) {
  const { category, stacks } = props;
  return (
    <Div className="grid grid-rows-[40px_1fr] gap-4 p-4">
      <Typo className="pl-3 text-2xl text-slate-600 dark:text-slate-300">{category}</Typo>
      <Div className="grid auto-rows-fr grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ">
        {stacks.map((stack) => (
          <Stack key={stack.name} name={stack.name} img={stack.img} />
        ))}
      </Div>
    </Div>
  );
}
