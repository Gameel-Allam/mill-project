import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const GateAndScaleLayout = () => {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default GateAndScaleLayout;
