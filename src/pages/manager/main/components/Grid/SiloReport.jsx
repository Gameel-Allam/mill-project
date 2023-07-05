import AllReport from "../AllReport"
import styles from "./CellsBar.module.scss"
import SiloReportInfo from "./SiloReportInfo"
const SiloReport = () => {
  return (
    <div className="col-6 my-5">
        <div className={`${styles.content} col-12`}>
            <div className={`col-6`}>
                <AllReport/>
            </div>
            <div className={`col-6 text-right da__chart`}>
                <SiloReportInfo/>
            </div>
        </div>
    </div>
  )
}

export default SiloReport