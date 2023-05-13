import React, { Suspense } from "react";
import SuspensePage from "/src/pages/suspense/Suspense";
const ReviewerLayout = React.lazy(() =>
  import("/src/layouts/ReviewerLayout/ReviewerLayout")
);
const ReviewerMain = React.lazy(() => import("/src/pages/reviewer/main"));
const ReviewerCells = React.lazy(() => import("/src/pages/reviewer/cells"));
const ReviewerMillsInfo = React.lazy(() =>
  import("/src/pages/reviewer/mills-info")
);
const ReviewerMillsProgram = React.lazy(() =>
  import("/src/pages/reviewer/mills-program")
);
const ReviewerSessions = React.lazy(() =>
  import("/src/pages/reviewer/sessions")
);
const ReviewerWheatInfo = React.lazy(() =>
  import("/src/pages/reviewer/wheat-info")
);
const ReviewerWheatProgram = React.lazy(() =>
  import("/src/pages/reviewer/wheat-program")
);

export const reviewerRoutes = {
  path: "reviewer",
  element: (
    <Suspense fallback={<SuspensePage />}>
      <ReviewerLayout />
    </Suspense>
  ),
  children: [
    { index: true, element: <ReviewerMain /> },
    {
      path: "program/sessions",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ReviewerSessions />
        </Suspense>
      ),
    },
    {
      path: "program/mills",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ReviewerMillsProgram />
        </Suspense>
      ),
    },
    {
      path: "program/wheat",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ReviewerWheatProgram />
        </Suspense>
      ),
    },
    {
      path: "info/wheat",
      element: (
        <Suspense fallback={<SuspensePage />}>
          {" "}
          <ReviewerWheatInfo />
        </Suspense>
      ),
    },
    {
      path: "info/mills",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ReviewerMillsInfo />
        </Suspense>
      ),
    },
    {
      path: "info/cells",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <ReviewerCells />
        </Suspense>
      ),
    },
  ],
};
