import AllReport from "../AllReport";
import styles from "./CellsBar.module.scss";
import SiloReportInfo from "./SiloReportInfo";
const SiloReport = () => {
  return (
    <div className="col-6 flex-grow-1 ">
      <div className={`${styles.content} col-12 flex-grow-1`}>
        <div className={`col-6`}>
          <AllReport />
        </div>
        <div className={`col-6 text-right da__chart flex-grow-1`}>
          <SiloReportInfo />
        </div>
      </div>
    </div>
  );
};

export default SiloReport;
