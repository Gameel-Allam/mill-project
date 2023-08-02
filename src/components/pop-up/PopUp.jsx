import styles from "./popUp.module.scss";

// eslint-disable-next-line react/prop-types
const PopUp = ({ setPopUpMode = [], headerData = [] }) => {
  console.log(headerData);
  console.log(headerData["data"]);
  return (
    <div className={styles.popUp}>
      <div
        className={styles.overlay}
        onClick={() => setPopUpMode((popUpMode) => !popUpMode)}
      ></div>
      <div className={styles.modal}>
        <p> عرض المعلومات</p>
        {headerData["header"].map((item, idx) => (
          <div className={styles.inputGroup} key={idx}>
            <input disabled value={headerData["data"][idx + 1]} />
            <label>{headerData["header"][idx]}</label>
          </div>
        ))}
        <div className={styles.functionBtns}>
          <button onClick={() => setPopUpMode((popUpMode) => !popUpMode)}>
            خروج
          </button>
          {/* <button>حفظ</button> */}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
