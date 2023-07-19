import React, { useEffect, useState } from "react";
import { allTableData } from "/src/components/main-table/allData.js";
import { useDispatch, useSelector } from "react-redux";
import { getAllMillsSessionsProgram } from "/src/features/reviewer/ReviewerActions";

const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));

const MillsSessionsPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { millSessionsPrograms } = useSelector((state) => state.reviewer);
  console.log(millSessionsPrograms);
  useEffect(() => {
    dispatch(getAllMillsSessionsProgram());
  }, [dispatch]);
  return (
    <>
      {popUpMode ? (
        <PopUp
          setPopUpMode={setPopUpMode}
          headerData={allTableData.sessions.header}
        />
      ) : (
        ""
      )}
      <div>
        <MainTable
          headerData={allTableData.sessions.header}
          bodyData={allTableData.sessions.body}
          setPopUpMode={setPopUpMode}
        />
      </div>
    </>
  );
};

export default MillsSessionsPage;
