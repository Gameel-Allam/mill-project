import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import styles from "./search.module.scss";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { searchedVisitData } from "../../features/gate/GateActions";
const Search = () => {
  const dispatch = useDispatch();
const [searchValue, setSearchValue] = useState("");
useEffect(()=>{
const depouncedSearchValue=setTimeout(()=>{
  console.log("object",searchValue)
  if(searchValue){

    dispatch( searchedVisitData(searchValue))
  }
},1000)
return ()=>{
  clearTimeout(depouncedSearchValue)
};
},[searchValue ]);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searched value : " + searchValue);
  };

  return (
    <form className={styles.searchBar} onSubmit={handleSearch}>
      <IconButton sx={{ p: "10px" }} aria-label="menu"></IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
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
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
    </form>
  );
};

export default Search;
