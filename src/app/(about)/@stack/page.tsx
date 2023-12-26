import { kv } from '@vercel/kv';
import { sectionCss } from '@/styles/stack.css';
import { StackType } from '@/types/stackType';
import Stack from '@/components/organisms/stack';
import { containerCss } from '@/styles/layout.css';
import Container from '@/components/atoms/base/container';

export default async function StackPage() {
  const frontStack = await kv.hgetall<StackType>('frontStack');
  const backStack = await kv.hgetall<StackType>('backStack');
  const etcStack = await kv.hgetall<StackType>('etcStack');

  if (frontStack && backStack && etcStack)
    return (
      <Container className={containerCss}>
        <section className={sectionCss}>
          <Stack stackName="front" tags={frontStack} />
        </section>
        <section className={sectionCss}>
          <Stack stackName="back" tags={backStack} />
        </section>
        <section className={sectionCss}>
          <Stack stackName="etc" tags={etcStack} />
        </section>
      </Container>
    );
}
