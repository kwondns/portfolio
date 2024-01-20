import { StackType } from '@/types';
import { Div, Typo } from '@/atoms';
import { StackByCategory } from '@/molecules';

type StackByTypeProps = {
  tech: StackType.StackTechType;
  stacksCategory: StackType.StackCategoryType[];
};

const colorByTech = {
  front: 'hover:bg-red-300/5',
  back: 'hover:bg-cyan-300/5',
  etc: 'hover:bg-blue-300/5',
};
export default function StackByTech(props: StackByTypeProps) {
  const { tech, stacksCategory } = props;
  return (
    <Div className={`my-6 flex flex-col rounded-3xl border-2 border-slate-500/50  p-4 ${colorByTech[tech]}`}>
      <Typo className="text-2xl">{tech.toUpperCase()}</Typo>
      {stacksCategory.map((value) => (
        <StackByCategory key={value.category} category={value.category} stacks={value.stacks} />
      ))}
    </Div>
  );
}
