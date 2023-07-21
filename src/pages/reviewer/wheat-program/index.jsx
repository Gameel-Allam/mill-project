import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
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
  useEffect(() => {
    dispatch(getAllWheatProgram());
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
      <Pagination />
    </div>
  );
};

export default WheatProgramPage;
