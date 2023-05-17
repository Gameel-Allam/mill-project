import React, { Suspense } from "react";
import SuspensePage from "/src/pages/suspense/Suspense";
const ScaleLayout = React.lazy(() =>
  import("/src/layouts/GateAndScallLayout/GateAndScaleLayout")
);
const ScaleIndex = React.lazy(() => import("/src/pages/scale/main"));
const ScaleMills = React.lazy(() => import("/src/pages/scale/mills"));

export const scaleRoutes = {
  path: "scale",
  element: (
    <Suspense fallback={<SuspensePage />}>
      <ScaleLayout />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ScaleIndex />
        </Suspense>
      ),
    },
    {
      path: "mills",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ScaleMills />
        </Suspense>
      ),
    },
  ],
};
