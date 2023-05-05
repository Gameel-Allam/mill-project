import React from "react";
import { createBrowserRouter } from "react-router-dom";

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
const routerConfig = [
  {
    path: "/",
    element: <LoginLayout />,
  },
  { path: "gate", element: <GateLayout /> },
  { path: "scale", element: <ScaleLayout /> },
  { path: "reviewer", element: <ReviewerLayout /> },
  { path: "manager", element: <ManagerLayout /> },
]
export const router = createBrowserRouter(routerConfig);
