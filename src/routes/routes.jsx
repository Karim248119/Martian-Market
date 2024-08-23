import { createBrowserRouter } from "react-router-dom";

// import Home from "../pages/home/Home";
// import About from "../pages/About/About";
import { lazy, Suspense } from "react";
import App from "../App";
import Loading from "../components/Loading";
// const Layout = lazy(() => import("../pages/Auth/Layout/Layout"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Signup = lazy(() => import("../pages/Auth/Signup"));
const Home = lazy(() => import("../pages/Home/Home"));
const All = lazy(() => import("../pages/All"));
const Men = lazy(() => import("../pages/Men"));
const Women = lazy(() => import("../pages/Women"));
const Electronics = lazy(() => import("../pages/Electronics"));
const Cart = lazy(() => import("../pages/Cart"));
const Search = lazy(() => import("../pages/Search"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "Invalide Route",
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "all",
        element: (
          <Suspense fallback={<Loading />}>
            <All />
          </Suspense>
        ),
      },
      {
        path: "men",
        element: (
          <Suspense fallback={<Loading />}>
            <Men />
          </Suspense>
        ),
      },
      {
        path: "women",
        element: (
          <Suspense fallback={<Loading />}>
            <Women />
          </Suspense>
        ),
      },
      {
        path: "electronics",
        element: (
          <Suspense fallback={<Loading />}>
            <Electronics />
          </Suspense>
        ),
      },

      {
        path: "cart",
        element: (
          <Suspense fallback={<Loading />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "search",
        element: (
          <Suspense fallback={<Loading />}>
            <Search />
          </Suspense>
        ),
      },
      {
        path: "product-details",
        element: (
          <Suspense fallback={<Loading />}>
            <ProductDetails />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: (
          <Suspense fallback={<Loading />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "signup",
        element: (
          <Suspense fallback={<Loading />}>
            <Signup />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
