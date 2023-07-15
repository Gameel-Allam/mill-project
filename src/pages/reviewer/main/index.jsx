// import Steps from "./components/Steps";
import PrimarySearchAppBar from "../../../layouts/ManagerLayout/components/Navbar";
import Grid from "../../manager/main/components/Grid/Grid";
// import Stepper from "./components/stepper";

const index = () => {
  return (
    <div className="d-flex flex-column">
      {/* <Stepper /> */}
      <PrimarySearchAppBar />
      <Grid />
    </div>
  )
};

export default index;
