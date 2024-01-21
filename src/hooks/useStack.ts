import { getStack } from '@/apis';

export default function useStack() {
  return {
    queryKey: ['stack'],
    queryFn: getStack,
    suspense: true,
  };
}
