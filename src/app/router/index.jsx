import { Outlet, createBrowserRouter } from "react-router-dom";
import { loginRoutes } from "./login";

import { gateRoutes } from "./gate";
import { scaleRoutes } from "./scale";
import { reviewerRoutes } from "./reviewer";
import { managerRoutes } from "./manager";

const routerConfig = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      loginRoutes,
      gateRoutes,
      scaleRoutes,
      reviewerRoutes,
      managerRoutes,
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
