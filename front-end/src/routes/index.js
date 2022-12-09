import { createBrowserRouter } from "react-router-dom";

import { Login } from "../pages/login";
import { Home } from "../pages/home";
import { Classes } from "../pages/classes";
import { Modules } from "../pages/modules";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/classes",
    element: <Classes />,
  },
  {
    path: "/modules",
    element: <Modules />
  },
  {
    path: "/schools",
    // element: <Schools />
  },
  {
    path: "/grades",
    // element: <Grades />
  },
  {
    path: "/students",
    // element: <Students />
  },
  {
    path: "/professors",
    // element: <Professors />
  },
]);
