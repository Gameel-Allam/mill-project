import React, { useState } from "react";
import { allTableData } from "/src/components/main-table/allData.js";

// Components
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const WheatInfoPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  return (
    <div>
      {popUpMode && (
        <PopUp
          setPopUpMode={setPopUpMode}
          headerData={allTableData.sessions.header}
        />
      )}
      <p>
        معلومات
        <span>
          <ArrowBackIosNewIcon fontSize="small" />
        </span>
        <span>
          <QueryStatsIcon fontSize="medium" />
        </span>
        التقارير
      </p>
      <MainTable
        headerData={allTableData.wheatInfo.header}
        bodyData={allTableData.wheatInfo.body}
        setPopUpMode={setPopUpMode}
      />
      <Pagination />
    </div>
  );
};

export default WheatInfoPage;
