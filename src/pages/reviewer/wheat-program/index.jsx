import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTableData } from "/src/components/main-table/allData.js";
import { getAllWheatProgram } from "/src/features/reviewer/reviewerActions";

const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CarRepairIcon from "@mui/icons-material/CarRepair";
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const WheatProgramPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { wheatPrograms } = useSelector((state) => state.reviewer);
  console.log(wheatPrograms);
  useEffect(() => {
    dispatch(getAllWheatProgram());
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
          <CarRepairIcon fontSize="medium" />
        </span>
        القمح المحلى
      </p>
      <MainTable
        setPopUpMode={setPopUpMode}
        headerData={allTableData.wheatProgram.header}
        bodyData={allTableData.wheatProgram.body}
      />
      <Pagination />
    </div>
  );
};

export default WheatProgramPage;
