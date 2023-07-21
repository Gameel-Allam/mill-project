import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { getAllCollectionCenterProgram } from "/src/features/reviewer/ReviewerActions";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const ReviewerHanagerProgram = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { hanagerPrograms } = useSelector((state) => state.reviewer);
  const checkedValue = [
    {
      programId: 58,

      entityId: 52,

      entityName: "new name",
      entityType: "مراكز التجميع أو الهناجر",
      wheatId: 7,

      totalShippedWeight: 600.0,
      totalExchangedWeight: 600.0,
      totalWheatLoss: 300.0,
      createdBy: "atlam@gmail.com",
      createdOn: null,
    },
    {
      programId: 58,

      entityId: 52,

      entityName: "new name",
      entityType: "مراكز التجميع أو الهناجر",
      wheatId: 7,

      totalShippedWeight: 600.0,
      totalExchangedWeight: 600.0,
      totalWheatLoss: 300.0,
      createdBy: "atlam@gmail.com",
      createdOn: null,
    },
    {
      programId: 58,

      entityId: 52,

      entityName: "new name",
      entityType: "مراكز التجميع أو الهناجر",
      wheatId: 7,

      totalShippedWeight: 600.0,
      totalExchangedWeight: 600.0,
      totalWheatLoss: 300.0,
      createdBy: "atlam@gmail.com",
      createdOn: null,
    },
    {
      programId: 58,

      entityId: 52,

      entityName: "new name",
      entityType: "مراكز التجميع أو الهناجر",
      wheatId: 7,

      totalShippedWeight: 600.0,
      totalExchangedWeight: 600.0,
      totalWheatLoss: 300.0,
      createdBy: "atlam@gmail.com",
      createdOn: null,
    },
    {
      programId: 58,

      entityId: 52,

      entityName: "new name",
      entityType: "مراكز التجميع أو الهناجر",
      wheatId: 7,

      totalShippedWeight: 600.0,
      totalExchangedWeight: 600.0,
      totalWheatLoss: 300.0,
      createdBy: "atlam@gmail.com",
      createdOn: null,
    },
  ];
  const tableBody = checkedValue.map((ele) => [
    ele.entityId,
    ele.entityName,
    ele.entityType,
    ele.totalShippedWeight,
    ele.totalExchangedWeight,
    ele.totalWheatLoss,
    ele.createdBy,
  ]);
  console.log(hanagerPrograms);
  useEffect(() => {
    dispatch(getAllCollectionCenterProgram("الهناجر"));
  }, [dispatch]);
  return (
    <div>
      {popUpMode && (
        <PopUp
          setPopUpMode={setPopUpMode}
          headerData={allTablesHeaders.hanagerAndCentersHeader}
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
        headerData={allTablesHeaders.hanagerAndCentersHeader}
        bodyData={tableBody}
        setPopUpMode={setPopUpMode}
      />
      <Pagination />
    </div>
  );
};

export default ReviewerHanagerProgram;
