import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { getAllMillsSessionsProgram } from "/src/features/main/mainActions";
import { getSingleMillSessionProgram } from "/src/features/main/signleActions.js";

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
  const { millSessionsPrograms, singleMillSessionsPrograms, pageInfo } =
    useSelector((state) => state.main);
  console.log(singleMillSessionsPrograms);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event, searchValue) => {
    event.preventDefault();
    setSearchValue(searchValue);
    console.log(searchValue);
    dispatch(
      getAllMillsSessionsProgram({
        pageNumber: 0,
        searchValue: searchValue,
      })
    );
  };
  // const checkedValue = [
  //   {
  //     programId: 34,

  //     entityId: 28,

  //     entityName: "string",

  //     startDate: "2023-07-13",

  //     endDate: "2023-07-13",

  //     wheatType: "shipName/importedWheatType or cleanlinessDegree",

  //     determinedWeight: 3000.0,

  //     remainingWeight: 3000.0,

  //     createdBy: null,
  //   },
  // ];
  // const tableBody = checkedValue.map((ele) => [
  //   ele.programId,
  //   ele.entityName,
  //   ele.startDate,
  //   ele.endDate,
  //   ele.wheatType,
  //   ele.determinedWeight,
  //   ele.remainingWeight,
  // ]);
  console.log(millSessionsPrograms);
  const handleSingleRow = (id) => {
    console.log(id);
    setPopUpMode((popUpMode) => !popUpMode);
    dispatch(getSingleMillSessionProgram({ id: id }));
  };
  const tableBody = millSessionsPrograms?.map((ele) => [
    ele.programId,
    ele.entityName,
    ele.startDate,
    ele.endDate,
    ele.wheatType,
    ele.determinedWeight,
    ele.remainingWeight,
  ]);
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
      getAllMillsSessionsProgram({
        pageNumber: value - 1,
        searchValue: searchValue,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getAllMillsSessionsProgram({
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
        البرامج
        <span>
          <ArrowBackIosNewIcon fontSize="small" />
        </span>
        <span>
          <GavelIcon fontSize="medium" />
        </span>
        مطاحن و جلسات
      </p>
      {tableBody && (
        <MainTable
          headerData={allTablesHeaders.millsSessionHeader}
          bodyData={tableBody || []}
          setPopUpMode={setPopUpMode}
          handleSearch={handleSearch}
          handleSingleRow={handleSingleRow}
        />
      )}
      {tableBody && (
        <Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default MillsSessionsPage;
