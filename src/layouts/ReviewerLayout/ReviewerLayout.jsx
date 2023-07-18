import { Outlet } from "react-router-dom";
import Sidbar from "./components/Sidbar";
import withGuard from "../../util/withGuard";
// import PrimarySearchAppBar from "../ManagerLayout/components/Navbar";

const ReviewerLayout = () => {
  return (
    <main className="myContainer">
      <Sidbar />
      {/* <div className="d-flex flex-column">
        <PrimarySearchAppBar /> */}
      <Outlet />
      {/* </div> */}
    </main>
  );
};

export default withGuard(ReviewerLayout);
