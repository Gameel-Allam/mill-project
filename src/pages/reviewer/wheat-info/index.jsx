import React from "react";

const MainTable = React.lazy(() => import("/src/components/main-table"));
const Pagination = React.lazy(() => import("/src/components/Pagination.jsx"));

const index = () => {
  const tableHeaderData = [
    "نوع القمح",
    "رصيد اول",
    "رصيد اخر",
    "الكمية المنصرفة",
    "الكمية الواردة",
    "عرض العملية",
  ];

  const tableBodyData = [
    {
      1: "22.5",
      2: "1000 كيلو",
      3: "5600 كيلو",
      4: "1000 كيلو",
      5: "5600 كيلو",
    },
    {
      1: "23",
      2: "14230 كيلو",
      3: "54230 كيلو",
      4: "10230 كيلو",
      5: "56200 كيلو",
    },
    {
      1: "23.5",
      2: "1200 كيلو",
      3: "5700 كيلو",
      4: "2000 كيلو",
      5: "9600 كيلو",
    },
    {
      1: "اريكا",
      2: "1430 كيلو",
      3: "5880 كيلو",
      4: "4000 كيلو",
      5: "6600 كيلو",
    },
    {
      1: "صفا",
      2: "1560 كيلو",
      3: "5210 كيلو",
      4: "1120 كيلو",
      5: "3100 كيلو",
    },
    {
      1: "جولى",
      2: "1000 كيلو",
      3: "5600 كيلو",
      4: "1000 كيلو",
      5: "5600 كيلو",
    },
    {
      1: "ديانا",
      2: "3200 كيلو",
      3: "3200 كيلو",
      4: "1200 كيلو",
      5: "3200 كيلو",
    },
  ];
  return (
    <div>
      <MainTable headerData={tableHeaderData} bodyData={tableBodyData} />
    </div>
  );
};

export default index;
