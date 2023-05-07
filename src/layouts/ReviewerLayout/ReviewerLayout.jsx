import { Outlet } from "react-router-dom";
import Sidbar from "./components/Sidbar";

const ReviewerLayout = () => {
  return (
    <main className="container">
      <Sidbar />
      <Outlet />
    </main>
  );
};

export default ReviewerLayout;
