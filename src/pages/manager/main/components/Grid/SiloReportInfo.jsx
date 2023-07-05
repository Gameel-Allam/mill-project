import WheatReport from '../WheatReport'
import styles from './CellsBar.module.scss'
const SiloReportInfo = () => {
  return (
    <div className={`${styles.siloInfo} d-flex flex-column`}>
         <WheatReport/>
    </div>
  )
}

export default SiloReportInfo