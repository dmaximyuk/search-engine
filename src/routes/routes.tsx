import { type RouteObject, createBrowserRouter } from "react-router-dom";

import { App, Home } from "core";

const routes: Array<RouteObject> = [
  {
    element: <App />,
    children: [
      {
        path: "/search-engine",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "/" });

export { routes, router };
