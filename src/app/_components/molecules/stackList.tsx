import { TagStackType, StackButtonType } from '@/types/tagType';
import {
  articleCss,
  articlePCss,
  articleULCss,
  tagListCategoryCss,
  tagListLiCss,
  tagListUlCss,
} from '@/components/molecules/tagList.css';
import StackButton from '@/components/atoms/stackButton/stackButton';

type TagByCategoryType = { [keys: string]: StackButtonType[] };

type TagListType = {
  stackName: TagStackType;
  tags: TagByCategoryType;
};

export default function StackList(props: TagListType) {
  const { stackName, tags } = props;
  const stackDict = { front: 'Front-End', back: 'Back-End', etc: 'ETC', DB: 'DB' };
  return (
    <article className={articleCss[stackName]}>
      <p className={articlePCss}>{stackDict[stackName]}</p>
      <ul className={articleULCss}>
        {Object.keys(tags).map((category) => {
          return (
            <ul className={tagListUlCss} key={category}>
              <p className={tagListCategoryCss}>{category}</p>
              {tags[category].map((stack) => {
                return (
                  <li className={tagListLiCss} key={`${category}_${stack.value}`}>
                    <StackButton
                      key={stack.value}
                      value={stack.value}
                      type={stackName}
                      link={stack.link}
                      img={stack.img}
                    />
                  </li>
                );
              })}
            </ul>
          );
        })}
      </ul>
    </article>
  );
}
