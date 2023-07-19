import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTableData } from "/src/components/main-table/allData.js";
import { getAllCollectionCenterProgram } from "/src/features/reviewer/ReviewerActions";

const MainTable = React.lazy(() => import("/src/components/main-table"));
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));

const CentersProgramPage = () => {
  const [popUpMode, setPopUpMode] = useState(false);
  const dispatch = useDispatch();
  const { collectionCenterPrograms } = useSelector((state) => state.reviewer);
  console.log(collectionCenterPrograms);
  useEffect(() => {
    dispatch(getAllCollectionCenterProgram());
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
          headerData={allTableData.millsProgram.header}
          bodyData={allTableData.millsProgram.body}
          setPopUpMode={setPopUpMode}
        />
      </div>
    </>
  );
};

export default CentersProgramPage;
