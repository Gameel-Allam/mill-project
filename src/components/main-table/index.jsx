import { IconButton, InputBase } from "@mui/material";
import styles from "./mainTable.module.scss";
import { useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const MainTable = ({
  headerData = [],
  bodyData = [],
  setPopUpMode,
  handleSearch,
}) => {
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSingleRow = (idx, ele) => {
    if (pathname.endsWith("info/mills")) navigate(`${idx}`, { state: { ele } });
    else setPopUpMode((popUpMode) => !popUpMode);
  };

  return (
    <div className={styles.mainTable}>
      <div className={styles.searchBar}>
        <form onSubmit={(event) => handleSearch(event, searchValue)}>
          <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
          <InputBase
            sx={{ ml: 5, flex: 1 }}
            placeholder="بحث"
            inputProps={{ "aria-label": "record search" }}
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={(event) => handleSearch(event, searchValue)}
          >
            <SearchIcon />
          </IconButton>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            {headerData.map((ele, idx) => (
              <th key={idx}>{ele}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyData.map((ele) => (
            <tr key={ele[0]} onClick={handleSingleRow}>
              {ele
                .filter((_, idx) => idx !== 0)
                .map((ele, idx) => (
                  <td key={idx}>{ele}</td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
