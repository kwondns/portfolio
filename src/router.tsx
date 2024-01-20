import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout, About } from '@/pages';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <About />,
      },
      {
        path: 'project',
        element: <>Project</>,
      },
      { path: 'note', element: <>Note</> },
    ],
  },
]);
export default function Router() {
  return <RouterProvider router={router} />;
}
