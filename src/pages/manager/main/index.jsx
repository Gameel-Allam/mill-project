// import { Grid } from "@mui/material";
// import AllReport from "./components/AllReport";
// import CellsReports from "./components/CellsReports";
// import WheatReport from "./components/WheatReport";

import PrimarySearchAppBar from "../../../layouts/ManagerLayout/components/Navbar";
import Grid from "./components/Grid/Grid";

const index = () => {
  return (
    <div className="d-flex flex-column">
      <PrimarySearchAppBar />
      <Grid />
    </div>
  )
};

export default index;
