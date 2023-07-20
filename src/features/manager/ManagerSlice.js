import { createSlice } from "@reduxjs/toolkit";
import { getAllCells, getCell } from "./ManagerActions";

const initialState = {
  loading: false,
  success: false,
  error: false,
  errorMessage: "",
  CellsAllData: [],
  CellData: {},
};

export const gateSlice = createSlice({
  name: "manager",
  initialState,
  reducers: {
    closeModal: (state) => {
      state.openModal = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch all cells
      .addCase(getAllCells.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCells.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.CellsAllData = action.payload;
      })
      .addCase(getAllCells.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
      // Fetch a cell by id
      .addCase(getCell.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCell.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.CellData = action.payload;
      })
      .addCase(getCell.rejected, (state, action) => {
        state.loading = false;
        state.error = true;
        state.errorMessage = action.payload;
      })
  },

})
export const { closeModal } = gateSlice.actions;
export default gateSlice.reducer;
