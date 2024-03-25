import { Fetch } from '@/libs';
import { StackType } from '@/types';

export default function useStack() {
  return {
    queryKey: ['stack'],
    queryFn: async () => Fetch<StackType.StackLoaderType>('port/stack'),
    suspense: true,
  };
}
