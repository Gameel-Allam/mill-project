import { Outlet } from "react-router-dom";
import Sidbar from "./components/Sidbar";
import PrimarySearchAppBar from "./components/Navbar";

const ManagerLayout = () => {
  return (
    <main className="myContainer">
      <Sidbar />
      <div className="d-flex flex-column">
      <PrimarySearchAppBar/>
      <Outlet />
      </div>
    </main>
  );
};

export default ManagerLayout;
