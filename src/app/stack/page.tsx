import { backStack, etcStack, frontStack } from '_temp/stack';
import TagList from '@/components/molecules/tagList';
import { sectionCss } from '@/styles/stack.css';

export default function StackPage() {
  return (
    <main>
      <section className={sectionCss}>
        <TagList stackName="front" tags={frontStack} />
        <TagList stackName="back" tags={backStack} />
      </section>
      <section className={sectionCss}>
        <TagList stackName="etc" tags={etcStack} />
      </section>
    </main>
  );
}
