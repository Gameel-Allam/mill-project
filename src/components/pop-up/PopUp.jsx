import styles from "./popUp.module.scss";

// eslint-disable-next-line react/prop-types
const PopUp = ({ setPopUpMode, headerData }) => {
  return (
    <div className={styles.popUp}>
      <div
        className={styles.overlay}
        onClick={() => setPopUpMode((popUpMode) => !popUpMode)}
      ></div>
      <div className={styles.modal}>
        <p> تعديل البيانات</p>
        {headerData
          .filter((ele) => ele !== "عرض العملية")
          .map((item, idx) => (
            <div className={styles.inputGroup} key={idx}>
              <input />
              <label>{item}</label>
            </div>
          ))}
        <div className={styles.functionBtns}>
          <button>الغاء</button>
          <button>حفظ</button>
        </div>
      </div>
    </div>
  );
};

export default PopUp;
