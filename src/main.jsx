import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Login from './pages/Login/Login'
import MainPage from './pages/MainPage/MainPage'
import ProductSelected from './pages/ProductSelected/ProductSelected'
import Carrinho from './pages/Carrinho/Carrinho'
import Pay from './pages/Pay/Pay'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PRODUCTS_MOCK } from './mock/product.mock'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/mainPage",
    element: <MainPage data={PRODUCTS_MOCK}/>,
  },
 
  {
    path: "/productSelected/:productId",
    element: <ProductSelected data={ PRODUCTS_MOCK }/>,
  },
  {
    path: "/carrinho/:carrinhoId",
    element: <Carrinho data={ PRODUCTS_MOCK }/>,
  },
  {
    path: "/pay",
    element: <Pay data={ PRODUCTS_MOCK }/>,
  },
  
 
  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
