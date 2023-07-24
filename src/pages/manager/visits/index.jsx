import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { getAllVisits } from "/src/features/main/mainActions";

// Components
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const VisitsPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { visitsData, pageInfo } = useSelector((state) => state.main);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);
  const handleSearch = (event, searchValue) => {
    event.preventDefault();
    setSearchValue(searchValue);
    console.log(searchValue);
    dispatch(
      getAllVisits({
        pageNumber: 0,
        searchValue: searchValue,
      })
    );
  };
  const tableBody = visitsData?.map((ele) => [
    ele.visitsId,
    ele.visitors[0].visitorName,
    ele.entityName,
    ele.visitReason,
    ele.startAt,
    ele.endAt,
    ele.createdBy,
  ]);
  const handlePageChange = (event, value) => {
    dispatch(
      getAllVisits({
        pageNumber: value - 1,
        searchValue: searchValue,
      })
    );
  };
  useEffect(() => {
    dispatch(
      getAllVisits({
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
          headerData={allTablesHeaders.visitsHeader}
        />
      )}
      <p>
        حركة الصومعة
        <span>
          <ArrowBackIosNewIcon fontSize="small" />
        </span>
        <span>
          <TransferWithinAStationIcon fontSize="medium" />
        </span>
        الزيارات
      </p>
      {tableBody && (
        <MainTable
          headerData={allTablesHeaders.visitsHeader}
          bodyData={tableBody || []}
          setPopUpMode={setPopUpMode}
          handleSearch={handleSearch}
        />
      )}
      {tableBody && (
        <Pagination pageInfo={pageInfo} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default VisitsPage;
