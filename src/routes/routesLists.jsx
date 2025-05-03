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
    path: "/projects/:search",
    element: ProjectsPage,
  },
];

export const protectedRoutes = [];
