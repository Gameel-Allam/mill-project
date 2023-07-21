import React, { useState } from "react";

const MainTable = React.lazy(() => import("/src/components/main-table"));
import { allTableData } from "/src/components/main-table/allData.js";
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import WarehouseIcon from "@mui/icons-material/Warehouse";
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const ReviewerHanagerProgram = () => {
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
        اضافة برنامج
        <span>
          <ArrowBackIosNewIcon fontSize="small" />
        </span>
        <span>
          <WarehouseIcon fontSize="medium" />
        </span>
        هناجر
      </p>
      <MainTable
        headerData={allTableData.sessions.header}
        bodyData={allTableData.sessions.body}
        setPopUpMode={setPopUpMode}
      />
      <Pagination />
    </div>
  );
};

export default ReviewerHanagerProgram;
