import { TagStackType, TagType } from '@/types/tagType';
import Tag from '@/components/atoms/tag';
import {
  articleCss,
  articlePCss,
  articleULCss,
  tagListCategoryCss,
  tagListLiCss,
  tagListUlCss,
} from '@/components/molecules/tagList.css';

type TagByCategoryType = { [keys: string]: TagType[] };

type TagListType = {
  stackName: TagStackType;
  tags: TagByCategoryType;
};

export default function TagList(props: TagListType) {
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
                    <Tag key={stack.value} value={stack.value} type={stackName} link={stack.link} />
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
