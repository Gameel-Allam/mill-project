import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { getAllWheatProgram } from "/src/features/reviewer/reviewerActions";

// Components
import CarRepairIcon from "@mui/icons-material/CarRepair";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const WheatProgramPage = () => {
  const dispatch = useDispatch();
  const [popUpMode, setPopUpMode] = useState(false);
  const { wheatPrograms, pageInfo } = useSelector((state) => state.reviewer);
  const checkedValue = [
    {
      programId: 22,

      entityId: 20,

      entityName: "دمياط",

      importedWheatId: 21,

      tripDate: "2023-07-14",

      shipName: "string",

      importedWheatType: "string",

      totalShippedWeight: 0.0,

      totalExchangedWeight: 0.0,

      createdBy: "atlam@gmail.com",
    },
  ];
  const tableBody = checkedValue.map((ele) => [
    ele.programId,
    ele.entityName,
    ele.tripDate,
    ele.shipName,
    ele.importedWheatType,
    ele.totalShippedWeight,
    ele.totalExchangedWeight,
    ele.createdBy,
  ]);
  console.log(wheatPrograms);
  const handlePageChange = (event, value) => {
    dispatch(
      getAllWheatProgram({
        pageNumber: value - 1,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getAllWheatProgram({
        pageNumber: 0,
      })
    );
  }, [dispatch]);
  return (
    <div>
      {popUpMode && (
        <PopUp
          setPopUpMode={setPopUpMode}
          headerData={allTablesHeaders.importedWheatHeader}
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
        headerData={allTablesHeaders.importedWheatHeader}
        bodyData={tableBody}
      />
      <Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
    </div>
  );
};

export default WheatProgramPage;
