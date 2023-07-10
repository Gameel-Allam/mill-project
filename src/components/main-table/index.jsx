import styles from "./mainTable.module.scss";

const MainTable = ({ headerData = [], bodyData = [] }) => {
  return (
    <table className={styles.mainTable}>
      <thead>
        <tr>
          {headerData.map((ele, idx) => {
            return <th key={idx}>{ele}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {bodyData.map((ele, idx) => (
          <tr key={idx}>
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
            <td>
              {ele[6] || (
                <div className={styles.tableBtns}>
                  <button>عرض</button>
                  <span>/</span>
                  <button>تعديل</button>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MainTable;
