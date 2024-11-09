import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider, useLocation } from 'react-router-dom'
import './index.css'
import Home from './components/sections/Home';
import NotFound from './components/Errorhandle/NotFound';
import BigSpinner from './components/Errorhandle/BigSpinner';
import Login from './components/login/Login';
import Signup from './components/login/Signup';
import ErrorPage from './components/Errorhandle/Errorpage'
import Men from './components/sections/Men'
import Women from './components/sections/Women'
import Kids from './components/sections/Kids'
import Cart from './components/sections/Cart'
import Account from './components/sections/Account'
import Checkout from './components/Utility/Checkout';
import ProductDetails from './components/Utility/ProductDetails';
import ProtectedRoute from './utils/protectedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 1000);  // Add a small delay to ensure scroll happens after page load
  }, [location]);

  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <Signup />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/men",
    element: (
      <ProtectedRoute>
        <Men />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/women",
    element: (
      <ProtectedRoute>
        <Women />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/kids",
    element: (
      <ProtectedRoute>
        <Kids />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/cart",
    element: (
      <ProtectedRoute>
        <Cart />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/product-details",
    element: (
      <ProtectedRoute>
        <ProductDetails />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/checkout",
    element: (
      <ProtectedRoute>
        <Checkout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/account",
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },

]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />

    <RouterProvider router={router} fallbackElement={<BigSpinner />} >
      <ScrollToTop />
    </RouterProvider>
  </>
);