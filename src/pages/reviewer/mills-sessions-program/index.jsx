import React, { useEffect, useState } from "react";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllMillsSessionsProgram } from "/src/features/reviewer/ReviewerActions";

// Components
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GavelIcon from "@mui/icons-material/Gavel";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const MillsSessionsPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { millSessionsPrograms } = useSelector((state) => state.reviewer);
  const checkedValue = [
    {
      programId: 34,

      entityId: 28,

      entityName: "string",

      startDate: "2023-07-13",

      endDate: "2023-07-13",

      wheatType: "shipName/importedWheatType or cleanlinessDegree",

      determinedWeight: 3000.0,

      remainingWeight: 3000.0,

      createdBy: null,
    },
    {
      programId: 34,

      entityId: 28,

      entityName: "string",

      startDate: "2023-07-13",

      endDate: "2023-07-13",

      wheatType: "shipName/importedWheatType or cleanlinessDegree",

      determinedWeight: 3000.0,

      remainingWeight: 3000.0,

      createdBy: null,
    },
    {
      programId: 34,

      entityId: 28,

      entityName: "string",

      startDate: "2023-07-13",

      endDate: "2023-07-13",

      wheatType: "shipName/importedWheatType or cleanlinessDegree",

      determinedWeight: 3000.0,

      remainingWeight: 3000.0,

      createdBy: null,
    },
    {
      programId: 34,

      entityId: 28,

      entityName: "string",

      startDate: "2023-07-13",

      endDate: "2023-07-13",

      wheatType: "shipName/importedWheatType or cleanlinessDegree",

      determinedWeight: 3000.0,

      remainingWeight: 3000.0,

      createdBy: null,
    },
    {
      programId: 34,

      entityId: 28,

      entityName: "string",

      startDate: "2023-07-13",

      endDate: "2023-07-13",

      wheatType: "shipName/importedWheatType or cleanlinessDegree",

      determinedWeight: 3000.0,

      remainingWeight: 3000.0,

      createdBy: null,
    },
    {
      programId: 34,

      entityId: 28,

      entityName: "string",

      startDate: "2023-07-13",

      endDate: "2023-07-13",

      wheatType: "shipName/importedWheatType or cleanlinessDegree",

      determinedWeight: 3000.0,

      remainingWeight: 3000.0,

      createdBy: null,
    },
  ];
  const tableBody = checkedValue.map((ele) => [
    ele.programId,
    ele.entityName,
    ele.startDate,
    ele.endDate,
    ele.wheatType,
    ele.determinedWeight,
    ele.remainingWeight,
  ]);
  console.log(tableBody);
  console.log(millSessionsPrograms);
  useEffect(() => {
    dispatch(getAllMillsSessionsProgram());
  }, [dispatch]);

  return (
    <div>
      {popUpMode && (
        <PopUp
          setPopUpMode={setPopUpMode}
          headerData={allTablesHeaders.millsSessionHeader}
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
        headerData={allTablesHeaders.millsSessionHeader}
        bodyData={tableBody}
        setPopUpMode={setPopUpMode}
      />
      <Pagination />
    </div>
  );
};

export default MillsSessionsPage;
