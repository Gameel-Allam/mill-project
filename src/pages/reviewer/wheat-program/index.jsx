import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { getAllWheatProgram } from "/src/features/main/mainActions";
import { getSingleWheatProgram } from "/src/features/main/signleActions.js";

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
  const { wheatPrograms, singleWheatProgram, pageInfo } = useSelector(
    (state) => state.main
  );
  console.log(singleWheatProgram);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event, searchValue) => {
    event.preventDefault();
    setSearchValue(searchValue);
    console.log(searchValue);
    dispatch(
      getAllWheatProgram({
        type: "مراكز التجميع",
        pageNumber: 0,
        searchValue: searchValue,
      })
    );
  };
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
  const handleSingleRow = (id) => {
    console.log(id);
    setPopUpMode((popUpMode) => !popUpMode);
    dispatch(getSingleWheatProgram({ id: id }));
  };
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
  const popupHeader = [
    "اسم الجهة",
    "نوع الجهة",
    "الكمية الكلية المشحونة",
    "الكمية الكلية الواصلة",
    "الكمية الكلية المفقودة",
    "تم انشاء بواسطة",
  ];
  const popupData = [
    "ميناء العقبة",
    "حكومى",
    "5000 كيلو",
    "4700 كيلو",
    "300 كيلو",
    "احمد",
  ];
  const handlePageChange = (event, value) => {
    dispatch(
      getAllWheatProgram({
        pageNumber: value - 1,
        searchValue: searchValue,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getAllWheatProgram({
        pageNumber: 0,
        searchValue: "",
      })
    );
  }, [dispatch]);
  return (
    <div>
      {popUpMode && (
        <PopUp
          setPopUpMode={setPopUpMode}
          headerData={{ header: popupHeader, data: popupData }}
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
        handleSearch={handleSearch}
        handleSingleRow={handleSingleRow}
      />
      <Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
    </div>
  );
};

export default WheatProgramPage;
