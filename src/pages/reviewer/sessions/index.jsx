import React from "react";

const MainTable = React.lazy(() => import("/src/components/main-table"));
import { allTableData } from "/src/components/main-table/allData.js";

const index = () => {
  return (
    <div>
      <MainTable
        headerData={allTableData.sessions.header}
        bodyData={allTableData.sessions.body}
      />
    </div>
  );
};

export default index;
