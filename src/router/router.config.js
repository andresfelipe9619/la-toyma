import { lazy } from "react";
const Home = lazy(() => import(/* webpackChunkName: "home" */ "../pages/Home"));
// const About = lazy(() =>
//   import(/* webpackChunkName: "about" */ "../pages/About")
// );
// const Contact = lazy(() =>
//   import(/* webpackChunkName: "contact" */ "../pages/Contact")
// );
// const Blog = lazy(() => import(/* webpackChunkName: "blog" */ "../pages/Blog"));

const routerConfig = [
  {
    path: "/",
    element: Home,
    name: "Home",
    exact: true,
    strict: true,
  },
  // {
  //   path: "/about",
  //   element: About,
  //   name: "About",
  //   exact: true,
  //   strict: true,
  // },
  // {
  //   path: "/contact",
  //   element: Contact,
  //   name: "Contact",
  //   exact: true,
  //   strict: true,
  // },
  // {
  //   path: "/blog",
  //   element: Blog,
  //   name: "Blog",
  //   exact: true,
  //   strict: true,
  // }
];

export default routerConfig;
