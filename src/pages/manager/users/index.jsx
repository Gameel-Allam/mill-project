import React from "react";

const MainTable = React.lazy(() => import("/src/components/main-table"));

const index = () => {
  const tableHeaderData = [
    "اسم المستخدم",
    "الادارة",
    "ساعات العمل",
    "Email",
    "رقم البطاقة ",
    "عرض العملية",
  ];

  const tableBodyData = [
    {
      1: "عبد العزير",
      2: "الاستلام",
      3: "9Am-3PM",
      4: "AbeEl3ziz1212",
      5: "1234567899",
    },
    {
      1: "احمد القاضي",
      2: "بوابة الدخول",
      3: "9Am-3PM",
      4: "ahmed1212",
      5: "1234566879",
    },
    {
      1: "محمد عبدالله",
      2: "بوابة الدخول",
      3: "3PM - 3PM",
      4: "mohamed12134",
      5: "5454122134",
    },
  ];
  return (
    <div>
      <MainTable headerData={tableHeaderData} bodyData={tableBodyData} />
    </div>
  );
};

export default index;
