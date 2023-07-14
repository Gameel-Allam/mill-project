import React, { Suspense } from "react";
import SuspensePage from "/src/pages/suspense/Suspense";
const ManagerLayout = React.lazy(() =>
  import("/src/layouts/ManagerLayout/ManagerLayout")
);
const ManagerMain = React.lazy(() => import("/src/pages/manager/main"));
const ManagerCells = React.lazy(() => import("/src/pages/manager/cells"));
const ManagerMillsInfo = React.lazy(() =>
  import("/src/pages/manager/mills-info")
);
const ManagerMillsProgram = React.lazy(() =>
  import("/src/pages/manager/mills-program")
);
const ManagerSessions = React.lazy(() => import("/src/pages/manager/sessions"));
const ManagerUsers = React.lazy(() => import("/src/pages/manager/users"));
const ManagerVisits = React.lazy(() => import("/src/pages/manager/visits"));
const ManagerWheat = React.lazy(() => import("/src/pages/manager/wheat"));
const SingleMill = React.lazy(() =>
  import("/src/components/single-mill/index.jsx")
);

export const managerRoutes = {
  path: "manager",
  element: (
    <Suspense fallback={<SuspensePage />}>
      <ManagerLayout />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerMain />
        </Suspense>
      ),
    },
    {
      path: "info/sessions",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerSessions />
        </Suspense>
      ),
    },
    {
      path: "info/cells",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerCells />
        </Suspense>
      ),
    },
    {
      path: "info/visits",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerVisits />
        </Suspense>
      ),
    },
    {
      path: "info/mills",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<SuspensePage />}>
              <ManagerMillsInfo />
            </Suspense>
          ),
        },
        {
          path: ":id",
          element: (
            <Suspense fallback={<SuspensePage />}>
              <SingleMill />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "program/wheat",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerWheat />
        </Suspense>
      ),
    },
    {
      path: "program/mills",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerMillsProgram />
        </Suspense>
      ),
    },
    {
      path: "users",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerUsers />
        </Suspense>
      ),
    },
  ],
};
