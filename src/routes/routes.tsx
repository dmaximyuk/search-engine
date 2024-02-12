import { type RouteObject, createBrowserRouter } from "react-router-dom";

import { App, Home } from "core";

const routes: Array<RouteObject> = [
  {
    element: <App />,
    children: [
      {
        path: "/test-task",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes, { basename: "/" });

export { routes, router };
