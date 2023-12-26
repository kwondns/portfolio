import StackButton from '@/components/atoms/stackButton/stackButton';
import { tagListCategoryCss, tagListLiCss, tagListUlCss } from '@/components/molecules/stackByCategory.css';
import { StackButtonType, TagStackType } from '@/types/stackType';

type StacksProps = {
  category: string;
  stackName: TagStackType;
  tags: StackButtonType[];
};
export default function StackByCategory(props: StacksProps) {
  const { category, tags, stackName } = props;
  return (
    <ul className={tagListUlCss}>
      <p className={tagListCategoryCss}>{category}</p>
      {tags.map((stack) => {
        return (
          <li className={tagListLiCss} key={`${category}_${stack.value}`}>
            <StackButton key={stack.value} value={stack.value} type={stackName} link={stack.link} img={stack.img} />
          </li>
        );
      })}
    </ul>
  );
}
