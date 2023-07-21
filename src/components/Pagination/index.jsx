import { Pagination, Stack } from "@mui/material";
import { useState } from "react";

const PaginationBar = () => {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    // dispatch(updateCurrentPage(value))/
    // dispatch(getAllVisits({ size: 10, pageNumber: value - 1 }))
    console.log("Current Page :" + value);
  };
  return (
    <>
      <Stack
        spacing={2}
        sx={{
          direction: "ltr",
        }}
      >
        <Pagination
          count={10}
          page={page}
          onChange={handleChange}
          shape="rounded"
          showFirstButton
          showLastButton
        />
      </Stack>
    </>
  );
};

export default PaginationBar;
