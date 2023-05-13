import { Suspense } from "react";
import LoginLayout from "/src/layouts/LoginLayout/LoginLayout";
import SuspensePage from "/src/pages/suspense/Suspense";

export const loginRoutes = {
  index: true,
  element: (
    <Suspense fallback={<SuspensePage />}>
      <LoginLayout />
    </Suspense>
  ),
};
