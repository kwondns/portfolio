import { kv } from '@vercel/kv';
import { sectionCss } from '@/styles/stack.css';
import { StackType } from '@/types/tagType';
import StackList from '@/components/molecules/stackList';

export default async function StackPage() {
  const frontStack = await kv.hgetall<StackType>('frontStack');
  const backStack = await kv.hgetall<StackType>('backStack');
  const etcStack = await kv.hgetall<StackType>('etcStack');

  if (frontStack && backStack && etcStack)
    return (
      <main>
        <section className={sectionCss}>
          <StackList stackName="front" tags={frontStack} type="stack" />
        </section>
        <section className={sectionCss}>
          <StackList stackName="back" tags={backStack} type="stack" />
        </section>
        <section className={sectionCss}>
          <StackList stackName="etc" tags={etcStack} type="stack" />
        </section>
      </main>
    );
}
