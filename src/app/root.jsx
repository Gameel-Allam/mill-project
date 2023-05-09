import React from "react";
import { Outlet, createBrowserRouter } from "react-router-dom";

// Import main layouts components
import LoginLayout from "../layouts/LoginLayout/LoginLayout";
import GateIndex from "../pages/gate";
import ScaleIndex from "../pages/scale/main";
import ScaleMills from "../pages/scale/mills";
import ManagerMain from "../pages/manager/main";
import ManagerCells from "../pages/manager/cells";
import ManagerMillsInfo from "../pages/manager/mills-info";
import ManagerMillsProgram from "../pages/manager/mills-program";
import ManagerSessions from "../pages/manager/sessions";
import ManagerUsers from "../pages/manager/users";
import ManagerVisits from "../pages/manager/visits";
import ManagerWheat from "../pages/manager/wheat";
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
  { index: true, element: <ManagerMain /> },
  { path: "info/sessions", element: <ManagerSessions /> },
  { path: "info/cells", element: <ManagerCells /> },
  { path: "info/visits", element: <ManagerVisits /> },
  { path: "info/mills", element: <ManagerMillsInfo /> },
  { path: "program/wheat", element: <ManagerWheat /> },
  { path: "program/mills", element: <ManagerMillsProgram /> },
  { path: "users", element: <ManagerUsers /> },
];
const routerConfig = [
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        index: true,
        element: <LoginLayout />,
      },
      {
        path: "gate",
        element: <GateLayout />,
        children: [
          {
            index: true,
            element: <GateIndex />,
          },
        ],
      },
      {
        path: "scale",
        element: <ScaleLayout />,
        children: [
          { index: true, element: <ScaleIndex /> },
          { path: "mills", element: <ScaleMills /> },
        ],
      },
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
