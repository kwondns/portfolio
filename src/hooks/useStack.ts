import { getStacks } from '@/apis';

export default function useStack() {
  return {
    queryKey: ['stack'],
    queryFn: getStacks,
    suspense: true,
  };
}
