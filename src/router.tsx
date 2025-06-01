import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import {
  Layout,
  About,
  stackLoader,
  Project,
  projectLoader,
  ProjectDetail,
  ProjectMoreDetail,
  projectDetailLoader,
} from '@/pages';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 100,
    },
  },
});

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <About />,
        loader: stackLoader(queryClient),
      },
      {
        path: 'project',
        element: <Project />,
        loader: projectLoader(queryClient),
      },
      { path: 'project/:projectId', element: <ProjectDetail />, loader: projectDetailLoader(queryClient) },
      { path: 'project/more/:projectId', element: <ProjectMoreDetail />, loader: projectDetailLoader(queryClient) },
    ],
  },
]);
export default function Router() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {import.meta.env.DEV && <ReactQueryDevtools />}
    </QueryClientProvider>
  );
}
