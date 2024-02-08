import { StackType } from '@/types';
import { Div, Stack, Typo } from '@/atoms';

type StackByCategoryProps = StackType.StackCategoryType;
export default function StackByCategory(props: StackByCategoryProps) {
  const { category, img, url, name } = props;
  return (
    <Div className="grid grid-rows-[40px_1fr] gap-2 md:gap-4 md:p-4">
      <Typo className="pl-3 text-base text-slate-600 dark:text-slate-300 md:text-2xl">{category}</Typo>
      {/* <Div className="grid auto-rows-fr grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 "> */}
      <Div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
        {name.map((stackName, index) => (
          <Stack key={stackName} name={stackName} img={img[index]} url={url[index]} />
        ))}
      </Div>
    </Div>
  );
}
