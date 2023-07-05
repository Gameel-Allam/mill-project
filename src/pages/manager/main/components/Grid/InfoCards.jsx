import { CurrencyExchangeSharp } from "@mui/icons-material"
import styles from "./CellsBar.module.scss"
const InfoCards = () => {
  return (
    <div className="col-6 my-5">
        <div className={styles.cells__card}>
            <div className={`${styles.box2} d-flex flex-column text-center p-5`}>
            <h5>المتبقي من الخلايا</h5>
              <p className={`${styles.statics}`}>1 K 
                <img src="src\assets\images\up general.png" alt="" width={30}/>
              </p>
              <img src="src\assets\images\cells.png" alt="Group-1" border="0" width={70} className={`${styles.card__img}`}/>
            </div>
            <div className={`${styles.box2} d-flex flex-column text-center p-5`}>
              <h5>القمح المنصرف</h5>
              <p className={`${styles.statics}`}>2 K <CurrencyExchangeSharp/></p>
              <img src="src\assets\images\outcome wheat.png" alt="Group-1" border="0" width={100} className={`${styles.card__img}`}/>
            </div>
            <div className={`${styles.box3} d-flex flex-column text-center p-5`}>
              <h5>القمح الوارد</h5>
              <p className={`${styles.statics}`}>3 K 
                <img src="src\assets\images\down general.png" alt="" width={30}/>
              </p>
              <img src="src\assets\images\income wheat.png" alt="Group-1" border="0" width={90} className={`${styles.card__img}`}/>
            </div>
            <div className={`${styles.box4} d-flex flex-column text-center`}>
            <div className={`${styles.box5} d-flex flex-column text-center`}>
              <h5>القمح الكلي</h5>
              <p className={`${styles.statics}`}>4 K 
                <sub className={`${styles.statics__sub}  ms-2`}>+2.5%</sub>
                <img src="src\assets\images\raise.png" alt="" width={20}/>
              </p>
              <img src="src\assets\images\wheat.png" alt="Group-1" border="0" width={60} className={`${styles.card__img}`}/>
            </div>
            <div className={`${styles.box6} d-flex flex-column text-center`}>
              <h5>الزائرين</h5>
              <p className={`${styles.statics}`}>5 K
                <sub className={`${styles.statics__sub} ms-2`}>+5%</sub>
                <img src="src\assets\images\raise.png" alt="" width={20}/>
              </p>
              <img src="src\assets\images\visitors.png" alt="Group-1" border="0" width={90} className={`${styles.card__img}`}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default InfoCards
