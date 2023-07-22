import { Pagination, Stack } from "@mui/material";

// eslint-disable-next-line react/prop-types
const PaginationBar = ({ pageInfo = [], handlePageChange = [] }) => {
  return (
    <>
      {pageInfo["total-pages"] > 1 && (
        <Stack
          spacing={2}
          sx={{
            direction: "ltr",
          }}
        >
          <Pagination
            count={pageInfo["total-pages"]}
            page={pageInfo["current-page"] + 1}
            onChange={handlePageChange}
            shape="rounded"
            showFirstButton
            showLastButton
          />
        </Stack>
      )}
    </>
  );
};

export default PaginationBar;
