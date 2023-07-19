import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTableData } from "/src/components/main-table/allData.js";
import { getAllWheatProgram } from "/src/features/reviewer/reviewerActions";

const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));

const WheatProgramPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { wheatPrograms } = useSelector((state) => state.reviewer);
  console.log(wheatPrograms);
  useEffect(() => {
    dispatch(getAllWheatProgram());
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
          setPopUpMode={setPopUpMode}
          headerData={allTableData.wheatProgram.header}
          bodyData={allTableData.wheatProgram.body}
        />
      </div>
    </>
  );
};

export default WheatProgramPage;
