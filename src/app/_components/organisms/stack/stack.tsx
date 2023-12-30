import { TagStackType, StackButtonType } from '@/types/stackType';
import { articleCss, articlePCss, articleULCss } from '@/components/organisms/stack/stack.css';
import StackByCategory from '@/components/molecules/stackByCategory/stackByCategory';

type StackByCategoryType = { [keys: string]: StackButtonType[] };

type TagListType = {
  stackName: TagStackType;
  tags: StackByCategoryType;
};

export default function Stack(props: TagListType) {
  const { stackName, tags } = props;
  const stackDict = { front: 'Front-End', back: 'Back-End', etc: 'ETC', DB: 'DB' };
  return (
    <article className={articleCss[stackName]}>
      <p className={articlePCss}>{stackDict[stackName]}</p>
      <ul className={articleULCss}>
        {Object.keys(tags).map((category) => (
          <StackByCategory key={category} category={category} stackName={stackName} tags={tags[category]} />
        ))}
      </ul>
    </article>
  );
}
