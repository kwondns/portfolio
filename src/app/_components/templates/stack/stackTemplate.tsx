import Container from '@/components/atoms/base/container';
import { containerCss } from '@/styles/layout.css';
import { sectionCss } from '@/styles/stack.css';
import Stack from '@/components/organisms/stack/stack';
import { StackType } from '@/types/stackType';

type StackTemplateProps = {
  frontStack: StackType | null;
  backStack: StackType | null;
  etcStack: StackType | null;
};
export default function StackTemplate(props: StackTemplateProps) {
  const { frontStack, backStack, etcStack } = props;
  return (
    <Container className={containerCss}>
      <section className={sectionCss}>{frontStack && <Stack stackName="front" tags={frontStack} />}</section>
      <section className={sectionCss}>{backStack && <Stack stackName="back" tags={backStack} />}</section>
      <section className={sectionCss}>{etcStack && <Stack stackName="etc" tags={etcStack} />}</section>
    </Container>
  );
}
