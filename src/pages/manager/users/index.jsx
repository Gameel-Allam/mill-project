import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTablesHeaders } from "/src/components/main-table/allData.js";
import { getAllUsers } from "/src/features/main/mainActions";
import { getSingleUser } from "/src/features/main/signleActions.js";

// Components
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));
const Pagination = React.lazy(() =>
  import("/src/components/Pagination/index.jsx")
);

const UsersPage = () => {
  const dispatch = useDispatch();
  const [popUpMode, setPopUpMode] = useState(false);
  const { users, singleUser, pageInfo } = useSelector((state) => state.main);
  console.log(users);
  console.log(singleUser);
  const userData = Object.values(singleUser || {});
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event, searchValue) => {
    event.preventDefault();
    setSearchValue(searchValue);
    console.log(searchValue);
    dispatch(
      getAllUsers({
        pageNumber: 0,
        searchValue: searchValue,
      })
    );
  };
  const handlePageChange = (event, value) => {
    dispatch(
      getAllUsers({
        type: "مراكز التجميع",
        pageNumber: value - 1,
        searchValue: searchValue,
      })
    );
  };
  const tableBody = users?.map((ele) => [
    ele.userId,
    ele.name,
    ele.role,
    ele.email,
    ele.cardId,
    ele.lastModifiedData,
  ]);
  const handleSingleRow = (id) => {
    console.log(id);
    setPopUpMode((popUpMode) => !popUpMode);
    dispatch(getSingleUser({ type: "الهناجر", id: id }));
  };
  const popupHeader = [
    "الاسم",
    "الايميل",
    "الدور",
    "العمر",
    "رقم البطاقة",
  ];
  console.log(singleUser);
  const popupData = singleUser || [
    singleUser?.name,
    singleUser?.email,
    singleUser?.role,
    singleUser?.age,
    singleUser?.cardId,
  ];

  useEffect(() => {
    dispatch(
      getAllUsers({
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
          headerData={{ header: popupHeader, data: userData }}
        />
      )}
      <p>
        المستخدمين
        <span>
          <ArrowBackIosNewIcon fontSize="small" />
        </span>
        <span>
          <PersonIcon fontSize="medium" />
        </span>
        تفاصيل المستخدمين
      </p>

      {tableBody && (
        <MainTable
          headerData={allTablesHeaders.usersHeader}
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

export default UsersPage;
