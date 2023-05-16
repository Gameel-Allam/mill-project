import React, { Suspense } from "react";
import LoginLayout from "/src/layouts/LoginLayout/LoginLayout";
import SuspensePage from "/src/pages/suspense/Suspense";
const LoginMain = React.lazy(() => import("/src/pages/Login/main"));
const LoginResetPassword = React.lazy(() =>
  import("/src/pages/Login/forget-password")
);

export const loginRoutes = {
  path: "",
  element: (
    <Suspense fallback={<SuspensePage />}>
      <LoginLayout />
    </Suspense>
  ),
  children: [
    {
      index: true,
      element: (
        <Suspense fallback={<SuspensePage />}>
          <LoginMain />
        </Suspense>
      ),
    },
    {
      path: "reset-password",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <LoginResetPassword />
        </Suspense>
      ),
    },
  ],
};
