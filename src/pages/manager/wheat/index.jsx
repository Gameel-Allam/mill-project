import React, { useState } from "react";

const MainTable = React.lazy(() => import("/src/components/main-table"));
import { allTableData } from "/src/components/main-table/allData.js";
const PopUp = React.lazy(() => import("../../../components/pop-up/PopUp"));

const WheatPage = () => {
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
        <MainTable
          headerData={allTableData.wheatProgram.header}
          bodyData={allTableData.wheatProgram.body}
          setPopUpMode={setPopUpMode}
        />
      </div>
    </>
  );
};

export default WheatPage;
