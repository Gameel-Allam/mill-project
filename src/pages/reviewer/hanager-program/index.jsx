import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { allPopupData } from "/src/components/pop-up/allData.js";
import { getAllCollectionCenterProgram } from "/src/features/main/mainActions";
import { getSingleCollectionCenterProgram } from "/src/features/main/signleActions.js";
import CollectionPro from "../collectionCenterPro/CollectionPro";
// Components
import WarehouseIcon from "@mui/icons-material/Warehouse";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const ReviewerHanagerProgram = () => {
  const dispatch = useDispatch();
  const [popUpMode, setPopUpMode] = useState(true);
  const [currentId, setCurrentId] = useState(0);
  const { hanagerPrograms, singleHanagerPrograms, pageInfo } = useSelector(
    (state) => state.main
  );
  console.log(singleHanagerPrograms);
  const [searchValue, setSearchValue] = useState("");
  function submitChanges(formValues) {
    console.log(formValues);
    const newProgram = {
      programId: currentId,
      startDate: formValues[2],
      endDate: formValues[3],
      programOrSession: "برنامج",
      sessionNumber: formValues[9],
      // entityId: 6,
      entityType: "مراكز التجميع أو الهناجر",
      entityName: formValues[0],
      localWheat: {
        // wheatId: 7,
        tripDate: formValues[4],
        releasePermission: formValues[5],
        reservationType: formValues[6],
        shipName: formValues[1],
        " cleanlinessDegree": "22.5",
        importedWheatType: formValues[7],
        determinedWeight: formValues[8],
      },
      createdOn: "2023-07-13T15:56:26.515Z",
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
      getAllCollectionCenterProgram({
        type: "الهناجر",
        pageNumber: 0,
        searchValue: searchValue,
      })
    );
  };
  const handleSingleRow = (id) => {
    setCurrentId(id);
    setPopUpMode((popUpMode) => !popUpMode);
    dispatch(getSingleCollectionCenterProgram({ type: "الهناجر", id: id }));
  };
  const tableBody =
    hanagerPrograms ||
    hanagerPrograms?.map((ele) => [
      ele.entityId,
      ele.entityName,
      ele.entityType,
      ele.totalShippedWeight,
      ele.totalExchangedWeight,
      ele.totalWheatLoss,
      ele.createdBy,
    ]);
  console.log(hanagerPrograms);
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
      getAllCollectionCenterProgram({
        type: "الهناجر",
        pageNumber: value - 1,
        searchValue: searchValue,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getAllCollectionCenterProgram({
        type: "الهناجر",
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
          <WarehouseIcon fontSize="medium" />
        </span>
        هناجر
      </p>
      <CollectionPro />
      {tableBody && (
        <MainTable
          headerData={allTablesHeaders.hanagerAndCentersHeader}
          bodyData={tableBody && []}
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

export default ReviewerHanagerProgram;
