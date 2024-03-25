import { Fetch } from '@/libs';
import { StackLoaderType } from '../types/stack';

export default function useStack() {
  return {
    queryKey: ['stack'],
    queryFn: async () => Fetch<StackLoaderType>('port/stack'),
    suspense: true,
  };
}
