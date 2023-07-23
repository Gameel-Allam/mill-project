import React, { useState } from "react";
import { allTableData } from "/src/components/main-table/allData.js";

// Components
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const MillsInfoPage = () => {
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
          <LocalFloristIcon fontSize="medium" />
        </span>
        المطاحن
      </p>
      <MainTable
        headerData={allTableData.millsInfo.header}
        bodyData={allTableData.millsInfo.body}
        setPopUpMode={setPopUpMode}
      />
      <Pagination />
    </div>
  );
};

export default MillsInfoPage;
