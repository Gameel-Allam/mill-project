import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allTableData } from "/src/components/main-table/allData.js";
import { getAllCollectionCenterProgram } from "/src/features/reviewer/ReviewerActions";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const MainTable = React.lazy(() => import("/src/components/main-table"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);
const PopUp = React.lazy(() => import("/src/components/pop-up/PopUp"));

const CentersProgramPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { collectionCenterPrograms } = useSelector((state) => state.reviewer);
  console.log(collectionCenterPrograms);
  useEffect(() => {
    dispatch(getAllCollectionCenterProgram());
  }, [dispatch]);

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
        مراكز تجميع
      </p>
      <MainTable
        headerData={allTableData.millsProgram.header}
        bodyData={allTableData.millsProgram.body}
        setPopUpMode={setPopUpMode}
      />
      <Pagination />
    </div>
  );
};

export default CentersProgramPage;
