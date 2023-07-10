import React from "react";

const MainTable = React.lazy(() => import("/src/components/main-table"));
import { allTableData } from "/src/components/main-table/allData.js";

const index = () => {
  return (
    <div>
      <MainTable
        headerData={allTableData.users.header}
        bodyData={allTableData.users.body}
      />
    </div>
  );
};

export default index;
