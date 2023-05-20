import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Search from "/src/components/search-bar";
import Pagination from "/src/components/Pagination";
const GateAndScaleLayout = () => {
  return (
    <main>
      <Navbar />
      <Search />
      <Outlet />
      <Pagination />
    </main>
  );
};

export default GateAndScaleLayout;
