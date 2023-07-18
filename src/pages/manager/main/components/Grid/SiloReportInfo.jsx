import WheatReport from "../WheatReport";
import styles from "./CellsBar.module.scss";
const SiloReportInfo = () => {
  return (
    <div className={`${styles.siloInfo} d-flex flex-column flex-grow-1`}>
      <WheatReport />
    </div>
  );
};

export default SiloReportInfo;
