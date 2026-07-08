import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import IndexPage from './routes/page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)