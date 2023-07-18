import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getAllVisits } from "../features/gate/GateActions";
import { updateCurrentPage } from "../features/gate/GateSlice";

export default function PaginationControlled() {
  const dispatch = useDispatch();
  // const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    // setPage(value);
    dispatch(updateCurrentPage(value))
    dispatch(getAllVisits({ size: 10, pageNumber: value - 1 }))
    console.log("Current Page :" + value);
  };
  const { pageInfo } = useSelector(state => state.gate);
  console.log("Page Info : ", pageInfo["total-pages"])
  return (
    <>
      {pageInfo["total-pages"] > 1 &&
        < Stack
          spacing={2}
          sx={{
            alignItems: "center",
            direction: "ltr",
            position: "absolute",
            bottom: "20px",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }
          }
        >
          <Pagination
            count={pageInfo["total-pages"]}
            page={pageInfo["current-page"] + 1}
            onChange={handleChange}
            shape="rounded"
            showFirstButton
            showLastButton
          />
        </Stack >
      }
    </>
  );
}
