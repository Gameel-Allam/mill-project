import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { allPopupData } from "/src/components/pop-up/allData.js";
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
  const [currentId, setCurrentId] = useState(0);
  const [popUpMode, setPopUpMode] = useState(true);
  const { wheatPrograms, singleWheatProgram, pageInfo } = useSelector(
    (state) => state.main
  );
  console.log(singleWheatProgram);
  const [searchValue, setSearchValue] = useState("");
  function submitChanges(formValues) {
    console.log(formValues);
    const newProgram = {
      programId: currentId,
      startDate: formValues[2],
      endDate: formValues[3],
      // entityId: 6,
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
  }
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
  const handleSingleRow = (id) => {
    setCurrentId(id);
    setPopUpMode((popUpMode) => !popUpMode);
    dispatch(getSingleWheatProgram({ id: id }));
  };
  const tableBody = wheatPrograms?.map((ele) => [
    ele.programId,
    ele.entityName,
    ele.tripDate,
    ele.shipName,
    ele.importedWheatType,
    ele.totalShippedWeight,
    ele.totalExchangedWeight,
    ele.createdBy,
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
  ];
  console.log(wheatPrograms);
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
          popupData={{
            header: allPopupData.wheatProgram.header,
            types: allPopupData.wheatProgram.headerTypes,
            data: popupData,
          }}
          submitChanges={submitChanges}
        />
      )}
      <p>
        البرامج
        <span>
          <ArrowBackIosNewIcon fontSize="small" />
        </span>
        <span>
          <CarRepairIcon fontSize="medium" />
        </span>
        القمح المحلى
      </p>
      {tableBody && (
        <MainTable
          setPopUpMode={setPopUpMode}
          headerData={allTablesHeaders.importedWheatHeader}
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

export default WheatProgramPage;
