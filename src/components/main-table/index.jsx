import styles from "./mainTable.module.scss";
import { useLocation, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MainTable = ({ headerData = [], bodyData = [], setPopUpMode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const handleSingleRow = (idx, ele) => {
    if (pathname.endsWith("info/mills")) navigate(`${idx}`, { state: { ele } });
    else setPopUpMode((popUpMode) => !popUpMode);
  };

  return (
    <div className={styles.mainTable}>
      <table>
        <thead>
          <tr>
            {headerData
              .filter((ele) => ele !== "Ignore")
              .map((ele, idx) => (
                <th key={idx}>{ele}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((ele, idx) => (
            <tr
              key={idx}
              onClick={() =>
                headerData[5] !== "Ignore" && handleSingleRow(idx, ele)
              }
              className={headerData[5] === "Ignore" ? styles.disabled : ""}
            >
              <td>{ele[1]}</td>
              <td>{ele[2]}</td>
              <td>
                {["غير مكتمل", "مكتمل"].includes(ele[3].trim()) ? (
                  <span
                    className={
                      ele[3].trim() == "مكتمل"
                        ? styles.completedCycle
                        : styles.notCompletedCycle
                    }
                  >
                    {ele[3]}
                  </span>
                ) : (
                  ele[3]
                )}
              </td>
              <td>{ele[4]}</td>
              <td>{ele[5]}</td>
              {headerData[5] !== "Ignore" ? (
                <td>
                  {headerData[5] == "عرض العملية" ? (
                    <button
                      className={styles.tableBtn}
                      onClick={(event) => {
                        event.stopPropagation();
                        setPopUpMode((popUpMode) => !popUpMode);
                      }}
                    >
                      تعديل
                    </button>
                  ) : (
                    ele[6]
                  )}
                </td>
              ) : (
                ""
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
