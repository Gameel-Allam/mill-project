import React from "react";
import styles from "./singleMill.module.scss";
import { useLocation } from "react-router-dom";
import { allTableData } from "/src/components/main-table/allData.js";
const MainTable = React.lazy(() => import("/src/components/main-table"));

const SingleMill = () => {
  const {
    state: { ele },
  } = useLocation();
  return (
    <div>
      <div className={styles.mainInfo}>
        <p>
          اسم المطحن :<span>{ele[1]}</span>
        </p>
        <p>
          تاريخ بداية البرنامج :<span>{ele[3]}</span>
        </p>
        <p>
          الكمية المطلوبة :<span>{ele[5]}</span>
        </p>
        <p>
          الكمية المصروفة :<span>{ele[6]}</span>
        </p>
      </div>
      <MainTable
        headerData={allTableData.singleMill.header}
        bodyData={allTableData.singleMill.body}
      />
    </div>
  );
};

export default SingleMill;
