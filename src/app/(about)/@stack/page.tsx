import { kv } from '@vercel/kv';
import { StackType } from '@/types/stackType';
import StackTemplate from '@/components/templates/stack/stackTemplate';

export default async function StackPage() {
  const frontStack = await kv.hgetall<StackType>('frontStack');
  const backStack = await kv.hgetall<StackType>('backStack');
  const etcStack = await kv.hgetall<StackType>('etcStack');

  return <StackTemplate frontStack={frontStack} backStack={backStack} etcStack={etcStack} />;
}
