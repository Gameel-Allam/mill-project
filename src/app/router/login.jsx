import React, { Suspense } from "react";
import LoginLayout from "/src/layouts/LoginLayout/LoginLayout";
import SuspensePage from "/src/pages/suspense/Suspense";
const LoginMain = React.lazy(() => import("/src/pages/Login/main"));
const LoginResetPassword = React.lazy(() =>
  import("/src/pages/Login/forget-password")
);
const LoginCheckCode = React.lazy(() => import("/src/pages/Login/check-code"));

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
      path: "check-code",
      element: (
        <Suspense fallback={<SuspensePage />}>
          <LoginCheckCode />
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
