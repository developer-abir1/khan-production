import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import HomePages from '../../pages/Home'
import Cart from '../../pages/cart'
import Products from '../../components/Home/products'
import Login from '../../pages/Login'
import ProductDetails from '../../pages/ProductDetails'
import Dashboard from '../../pages/dashboard/Dashboard'
import AddProducts from '../../pages/dashboard/AddProducts'
import DahboardLayout from '../../layouts/DahboardLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomePages /> },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'products',
        element: <Products />,
      },

      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'register',
        element: <Login />,
      },
      {
        path: 'product/:slug',
        element: <ProductDetails />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <DahboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
      {
        path: 'addProducts',
        element: <AddProducts />,
      },
    ],
  },
  {
    path: '*',
    element: <h1>404 Not Found</h1>,
  },
])

export default router
