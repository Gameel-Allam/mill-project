import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { allPopupData } from "/src/components/pop-up/allData.js";
import { getAllMillsSessionsProgram } from "/src/features/main/mainActions";
import { getSingleMillSessionProgram } from "/src/features/main/signleActions.js";
import SessionPro from "../sessionPro/SessionPro";
// Components
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import GavelIcon from "@mui/icons-material/Gavel";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const MillsSessionsPage = () => {
  const dispatch = useDispatch();
  const [popUpMode, setPopUpMode] = useState(true);
  const [currentId, setCurrentId] = useState(0);
  const { millSessionsPrograms, singleMillSessionsPrograms, pageInfo } =
    useSelector((state) => state.main);
  console.log(singleMillSessionsPrograms);
  console.log(millSessionsPrograms);
  const [searchValue, setSearchValue] = useState("");
  function submitChanges(formValues) {
    console.log(formValues);
    const newProgram = {
      programId: currentId,
      startDate: formValues[2],
      endDate: formValues[3],
      programOrSession: "جلسة",
      sessionNumber: formValues[9],
      // entityId: 6,
      entityType: "مطحن",
      entityName: formValues[0],
      importedWheat: {
        // wheatId: 7,
        tripDate: formValues[4],
        releasePermission: formValues[5],
        reservationType: formValues[6],
        shipName: formValues[1],
        importedWheatType: formValues[7],
        determinedWeight: formValues[8],
      },
      // lastModifiedDate: null,
    };
    console.log(newProgram);
    setPopUpMode((popUpMode) => !popUpMode);
  }
  const handleSearch = (event, searchValue) => {
    event.preventDefault();
    setSearchValue(searchValue);
    console.log(searchValue);
    dispatch(
      getAllMillsSessionsProgram({
        type: "مراكز التجميع",
        pageNumber: 0,
        searchValue: searchValue,
      })
    );
  };
  const handleSingleRow = (id) => {
    setCurrentId(id);
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
  const popupData = [
    "حكومى",
    "اريكا",
    "2022-07-22",
    "2022-07-22",
    "2022-07-22",
    5041,
    "جزئى",
    "روسى",
    3213,
    1,
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
          showEditMode={true}
          popupData={{
            header: allPopupData.millSessionsProgram.header,
            types: allPopupData.millSessionsProgram.headerTypes,
            data: popupData,
          }}
          submitChanges={submitChanges}
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
      <SessionPro />
      {tableBody && (
        <MainTable
          setPopUpMode={setPopUpMode}
          headerData={allTablesHeaders.millsSessionHeader}
          bodyData={tableBody}
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
