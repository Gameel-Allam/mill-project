import { Outlet } from "react-router-dom";
import Sidbar from "./components/Sidbar";
import withGuard from "../../util/withGuard";

const ReviewerLayout = () => {
  return (
    <main className="myContainer">
      <Sidbar />
      <Outlet />
    </main>
  );
};

export default withGuard(ReviewerLayout);
