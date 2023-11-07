import { kv } from '@vercel/kv';
import TagList from '@/components/molecules/tagList';
import { sectionCss } from '@/styles/stack.css';
import { StackType } from '@/types/tagType';
import { containerCss } from '@/styles/layout.css';

export default async function StackPage() {
  const frontStack = await kv.hgetall<StackType>('frontStack');
  const backStack = await kv.hgetall<StackType>('backStack');
  const etcStack = await kv.hgetall<StackType>('etcStack');

  if (frontStack && backStack && etcStack)
    return (
      <div className={containerCss} id="stack">
        <section className={sectionCss}>
          <TagList stackName="front" tags={frontStack} />
          <TagList stackName="back" tags={backStack} />
        </section>
        <section className={sectionCss}>
          <TagList stackName="etc" tags={etcStack} />
        </section>
      </div>
    );
}
