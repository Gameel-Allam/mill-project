import React, { useState } from "react";
import CollectionPro from "../collectionCenterPro/CollectionPro";
const MainTable = React.lazy(() => import("/src/components/main-table"));
import { allTableData } from "/src/components/main-table/allData.js";
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));

const ReviewerHanagerProgram = () => {
  const [popUpMode, setPopUpMode] = useState(false);
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
        <CollectionPro />
        <MainTable
          headerData={allTableData.sessions.header}
          bodyData={allTableData.sessions.body}
          setPopUpMode={setPopUpMode}
        />
      </div>
    </>
  );
};

export default ReviewerHanagerProgram;
