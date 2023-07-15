import React, { useRef, useState } from "react";
import styles from "./cellProfile.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const CellProfile = () => {
  const [currentValue, setCurrentValue] = useState(3000);
  const [editMode, setEditMode] = useState(false);
  const percentage = currentValue / 50;
  const ref = useRef();

  return (
    <div className={styles.cellContainer}>
      <div className={styles.cellCard}>
        {/* <input
          type="date"
          defaultValue="2023-07-04"
          onClick={(e) => console.log(e.currentTarget.value)}
        /> */}
        <p>معلومات الخلية 1 </p>
        <div className={styles.mainInfo}>
          <div className={styles.side}>
            <div>
              <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                circleRatio={0.7}
                styles={{
                  trail: {
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                    stroke: `#f5f5f5`,
                  },
                  path: {
                    stroke: "#8083ff",
                    transform: "rotate(-126deg)",
                    transformOrigin: "center center",
                  },
                  text: {
                    fill: "#8083ff",
                    fontSize: "20px",
                  },
                }}
              />
            </div>
            <button onClick={() => setCurrentValue(0)}>تصفير الخلية</button>
          </div>
          <div className={styles.details}>
            <p>
              <span>الميناء:</span>
              ميناء العقبة
            </p>
            <p>
              <span>نوع القمح:</span>
              روسي
            </p>
            <p>
              <span>الزيادة:</span>
              2000 كيلو
            </p>
            <p>
              <span>العجز:</span>0
            </p>
          </div>
        </div>
        <div className={styles.editableInfo}>
          <div>
            <span>الكمية الكلية:</span>
            <div>5000 طن</div>
          </div>
          <div>
            <span>الكمية الحالية:</span>
            {editMode ? (
              <p>
                <input
                  type="number"
                  min="0"
                  max="5000"
                  ref={ref}
                  defaultValue={currentValue}
                />{" "}
                طن
              </p>
            ) : (
              <div>{currentValue} طن</div>
            )}
          </div>
          <div>
            <span>تاريخ اخر اضافة:</span>
            <div>3/ 5 / 2021</div>
          </div>
          <div>
            <span>تاريخ اخر صرف:</span>
            <div>3/ 4 / 2021</div>
          </div>
          <div>
            <span>الباخرة:</span>
            <div>وادي الكرم</div>
          </div>
          {editMode ? (
            <div className={styles.editModeBtns}>
              <button
                onClick={() => {
                  setCurrentValue(ref.current.value);
                  setEditMode((e) => !e);
                }}
              >
                حفظ التعديل
              </button>
              <button
                onClick={() => setEditMode((e) => !e)}
                className={styles.cancelBtn}
              >
                الغاء
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setEditMode((e) => !e);
              }}
            >
              تعديل الخلية
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CellProfile;
