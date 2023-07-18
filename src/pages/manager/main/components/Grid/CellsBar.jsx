import CellsReports from "../CellsReports"
import styles from "./CellsBar.module.scss"
const CellsBar = () => {
  return (
    <div className="col-6 my-5">
        <div className={styles.cells}>
            <CellsReports/>
        </div>
    </div>
  )
}

export default CellsBar
