import { Fetch } from '@/libs';

export default function useStack() {
  return {
    queryKey: ['stack'],
    queryFn: async () => Fetch('port/stack'),
    suspense: true,
  };
}
