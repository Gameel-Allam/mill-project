import { Outlet } from "react-router-dom";
import Sidbar from "./components/Sidbar";

const ManagerLayout = () => {
  return (
    <main className="container">
      <Sidbar />
      <Outlet />
    </main>
  );
};

export default ManagerLayout;
