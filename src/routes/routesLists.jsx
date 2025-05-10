import { lazy } from "react";
import ProjectsPage from "../pages/projects/index.jsx"
export const publicRoutes = [
  { path: "/", element: lazy(() => import("../pages/home/index.jsx")) },
  {
    path: "/profile",
    element: lazy(() => import("../pages/profile/index.jsx")),
  },
  {
    path: "/projects",
    element: lazy(() => import("../pages/projects/index.jsx")),
  },
  {
    path:"/contact",
    element:lazy(()=>import("../pages/contact/index.jsx"))
  },
  {
    path:"/products",
    element:lazy(()=>import("../pages/Products/index.jsx"))
  },
  {
    path: "/projects/:search",
    element: ProjectsPage,
  },
  {
    path: "/project/:id",
    element: lazy(() => import("../pages/project/index.jsx")),
  },
  {
    path: "/product/:id",
    element: lazy(() => import("../pages/product/index.jsx")),
  },
];

export const protectedRoutes = [];
