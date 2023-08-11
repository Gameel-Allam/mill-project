import { useState } from "react";
import styles from "./popUp.module.scss";
// import { useEffect } from "react";

// eslint-disable-next-line react/prop-types
const PopUp = ({ setPopUpMode, popupData = [], submitChanges }) => {
  const [editMode, setEditMode] = useState(false);
  const [formValues, setFormValues] = useState(popupData.data);
  function formChange(eve) {
    const { name, value } = eve.target;
    setFormValues((formValues) => {
      const newFormValues = [...formValues];
      newFormValues[name] = value;
      return newFormValues;
    });
  }
  return (
    <div className={styles.popUp}>
      <div
        className={styles.overlay}
        onClick={() => setPopUpMode((popUpMode) => !popUpMode)}
      ></div>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div
            className={`${styles.button} ${styles.r}`}
            id={styles["button-3"]}
            onClick={() => {
              setEditMode((editMode) => !editMode);
              setFormValues(popupData.data);
            }}
          >
            <input type="checkbox" className={styles.checkbox} />
            <div className={styles.knobs}></div>
            <div className={styles.layer}></div>
          </div>
          <p>{editMode ? "تعديل" : "عرض"} المعلومات</p>
        </div>
        {formValues &&
          formValues.map((item, idx) => (
            <div className={styles.inputGroup} key={idx}>
              <input
                disabled={!editMode}
                value={formValues[idx]}
                name={idx}
                onChange={formChange}
                type={popupData.types[idx] || "text"}
              />
              <label>{popupData["header"][idx]}</label>
            </div>
          ))}
        <div className={styles.functionBtns}>
          <button onClick={() => setPopUpMode((popUpMode) => !popUpMode)}>
            خروج
          </button>
          {editMode && (
            <button type="submit" onClick={() => submitChanges(formValues)}>
              حفظ
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopUp;
