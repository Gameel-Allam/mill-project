import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { getAllCollectionCenterProgram } from "/src/features/main/mainActions";
import { getSingleCollectionCenterProgram } from "/src/features/main/signleActions.js";
import CollectionPro from "../collectionCenterPro/CollectionPro";
// components
import WarehouseIcon from "@mui/icons-material/Warehouse";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("/src/components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const CentersProgramPage = () => {
  const dispatch = useDispatch();
  const [popUpMode, setPopUpMode] = useState(false);
  const { collectionCenterPrograms, singleCollectionCenterPrograms, pageInfo } =
    useSelector((state) => state.main);
  console.log(collectionCenterPrograms);
  console.log(singleCollectionCenterPrograms);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event, searchValue) => {
    event.preventDefault();
    setSearchValue(searchValue);
    console.log(searchValue);
    dispatch(
      getAllCollectionCenterProgram({
        type: "مراكز التجميع",
        pageNumber: 0,
        searchValue: searchValue,
      })
    );
  };

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
  ];
  const handlePageChange = (event, value) => {
    dispatch(
      getAllCollectionCenterProgram({
        type: "مراكز التجميع",
        pageNumber: value - 1,
        searchValue: searchValue,
      })
    );
  };
  const handleSingleRow = (id) => {
    console.log(id);
    setPopUpMode((popUpMode) => !popUpMode);
    dispatch(
      getSingleCollectionCenterProgram({ type: "مراكز التجميع", id: id })
    );
  };
  const tableBody = collectionCenterPrograms && collectionCenterPrograms?.map((ele) => [
    ele.entityId,
    ele.entityName,
    ele.entityType,
    ele.totalShippedWeight,
    ele.totalExchangedWeight,
    ele.totalWheatLoss,
    ele.createdBy,
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
  useEffect(() => {
    dispatch(
      getAllCollectionCenterProgram({
        type: "مراكز التجميع",
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
          <WarehouseIcon fontSize="medium" />
        </span>
        مراكز تجميع
      </p>
      <CollectionPro />
      <MainTable
        headerData={allTablesHeaders.hanagerAndCentersHeader}
        bodyData={tableBody || []}
        setPopUpMode={setPopUpMode}
        handleSearch={handleSearch}
        handleSingleRow={handleSingleRow}
      />
      <Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
    </div>
  );
};

export default CentersProgramPage;