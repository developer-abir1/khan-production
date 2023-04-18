import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import HomePages from '../../pages/Home'
import Cart from '../../pages/cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePages /> },
      {
        path: '/cart',
        element: <Cart />,
      },
    ],
  },
])

export default router
