import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

// Import main layouts components
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
const GateLayout = React.lazy(() =>
  import("../layouts/GateAndScallLayout/GateAndScaleLayout")
);
const ScaleLayout = React.lazy(() =>
  import("../layouts/GateAndScallLayout/GateAndScaleLayout")
);
const ReviewerLayout = React.lazy(() =>
  import("../layouts/ReviewerLayout/ReviewerLayout")
);
const ManagerLayout = React.lazy(() =>
  import("../layouts/ManagerLayout/ManagerLayout")
);

const reviewerRoutes = [
  { index: true, element: <div>main</div> },
  { path: "program/sessions", element: <div>sessions program</div> },
  { path: "program/mills", element: <div>mills program</div> },
  { path: "program/wheat", element: <div>wheat program</div> },
  { path: "info/wheat", element: <div>wheat info</div> },
  { path: "info/mills", element: <div>mills info</div> },
  { path: "info/cells", element: <div>cells info</div> },
];
const managerRoutes = [
  { index: true, element: <div>main</div> },
  { path: "info/sessions", element: <div>sessions info</div> },
  { path: "info/cells", element: <div>cells info</div> },
  { path: "info/visits", element: <div>visits info</div> },
  { path: "info/mills", element: <div>mills info</div> },
  { path: "program/sessions", element: <div>sessions program</div> },
  { path: "program/wheat", element: <div>wheat program</div> },
  { path: "program/mills", element: <div>mills program</div> },
  { path: "users", element: <div>users</div> },
];
const routerConfig = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <LoginLayout /> },
      { path: "gate", element: <GateLayout /> },
      { path: "scale", element: <ScaleLayout /> },
      {
        path: "reviewer",
        element: <ReviewerLayout />,
        children: reviewerRoutes,
      },
      {
        path: "manager",
        element: <ManagerLayout />,
        children: managerRoutes,
      },
    ],
  },
];
export const router = createBrowserRouter(routerConfig);
