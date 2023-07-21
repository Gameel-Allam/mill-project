import React, { useEffect, useState } from "react";
import { allTableData } from "/src/components/main-table/allData.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllMillsSessionsProgram } from "/src/features/reviewer/ReviewerActions";

const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GavelIcon from "@mui/icons-material/Gavel";
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const MillsSessionsPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { millSessionsPrograms } = useSelector((state) => state.reviewer);
  console.log(millSessionsPrograms);
  useEffect(() => {
    dispatch(getAllMillsSessionsProgram());
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
          <GavelIcon fontSize="medium" />
        </span>
        مطاحن و جلسات
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

export default MillsSessionsPage;
