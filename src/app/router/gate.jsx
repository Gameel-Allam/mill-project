import React, { Suspense } from "react";

import SuspensePage from "/src/pages/suspense/Suspense";
const GateLayout = React.lazy(() =>
  import("/src/layouts/GateAndScallLayout/GateAndScaleLayout")
);
const GateIndex = React.lazy(() => import("/src/pages/gate"));

export const gateRoutes = {
  path: "gate",
  element: (
    <Suspense fallback={<SuspensePage />}>
      <GateLayout />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<SuspensePage />}>
          <GateIndex />
        </Suspense>
      ),
    },
  ],
};
