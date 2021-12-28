import { lazy } from "react";
const Home = lazy(() => import(/* webpackChunkName: "home" */ "../pages/Home"));

const routerConfig = [
  {
    path: "/",
    element: Home,
    name: "Home",
    exact: true,
    strict: true,
  }
];

export default routerConfig;
