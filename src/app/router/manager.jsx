import React, { Suspense } from "react";
import SuspensePage from "/src/pages/suspense/Suspense";
import CellProfile from "../../components/cell-profile/CellProfile";
const ManagerLayout = React.lazy(() =>
  import("/src/layouts/ManagerLayout/ManagerLayout")
);
const ManagerMain = React.lazy(() => import("/src/pages/manager/main"));
const ManagerCells = React.lazy(() => import("/src/pages/manager/cells"));
const ManagerVisits = React.lazy(() => import("/src/pages/manager/visits"));
const ManagerMills = React.lazy(() => import("/src/pages/manager/mills"));
const ManagerHanagerProgram = React.lazy(() =>
  import("/src/pages/manager/hanager-program")
);
const ManagerCentersProgram = React.lazy(() =>
  import("/src/pages/manager/centers-program")
);
const ManagerSessionsProgram = React.lazy(() =>
  import("/src/pages/manager/mills-sessions-program")
);
const ManagerWheatProgram = React.lazy(() =>
  import("/src/pages/manager/wheat-program")
);
const SingleCell = React.lazy(() => import("/src/pages/manager/singel-cell"));

const ManagerUsers = React.lazy(() => import("/src/pages/manager/users"));
// const CellProfile = React.lazy(() => import("/src/components/cell-profile"));
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
      path: "info/cells",
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={<SuspensePage />}>
              <ManagerCells />
            </Suspense>
          ),
        },
        {
          path: ":id",
          element: (
            <Suspense fallback={<SuspensePage />}>
              <CellProfile />
            </Suspense>
          ),
        },
      ],
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
              <ManagerMills />
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
      path: "program/sessions",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerSessionsProgram />
        </Suspense>
      ),
    },
    {
      path: "program/centers",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerCentersProgram />
        </Suspense>
      ),
    },
    {
      path: "program/hanager",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerHanagerProgram />
        </Suspense>
      ),
    },
    {
      path: "program/wheat",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ManagerWheatProgram />
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
