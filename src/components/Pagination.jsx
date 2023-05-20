import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled() {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    console.log("Current Page :" + value);
  };

  return (
    <Stack
      spacing={2}
      sx={{
        alignItems: "center",
        direction: "ltr",
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translate(-50%,-50%)",
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
  );
}
