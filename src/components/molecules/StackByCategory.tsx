import { StackType } from '@/types';
import { Div, Stack, Typo } from '@/atoms';

type StackByCategoryProps = StackType.StackCategoryType;
export default function StackByCategory(props: StackByCategoryProps) {
  const { category, img, url, name } = props;
  return (
    <Div className="grid grid-rows-[40px_1fr] md:gap-4 md:p-4">
      <Typo className="pl-3 text-base self-end text-slate-600 dark:text-slate-300 md:text-2xl">{category}</Typo>
      <Div className="mb-2 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
        {name.map((stackName, index) => (
          <Stack key={stackName} name={stackName} img={img[index]} url={url[index]} />
        ))}
      </Div>
    </Div>
  );
}
