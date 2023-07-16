import { Outlet } from "react-router-dom";
import Sidbar from "./components/Sidbar";
// import PrimarySearchAppBar from "./components/Navbar";

const ManagerLayout = () => {
  return (
    <main className="myContainer">
      <Sidbar />
      <Outlet />
    </main>
  );
};

export default ManagerLayout;
