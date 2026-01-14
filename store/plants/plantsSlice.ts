import { fetchPlantsService } from "../../services/plantsService";
import { Plant } from "../../types/plants";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type PlantsState = {
  items: Plant[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string;
};

const initialState: PlantsState = {
  items: [],
  status: "idle",
};

export const fetchPlants = createAsyncThunk<Plant[]>(
  "plants/fetchPlants",
  async () => {
    return await fetchPlantsService();
  }
);

const plantsSlice = createSlice({
  name: "plants",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlants.pending, (state) => {
        state.status = "loading";
        state.error = undefined;
      })
      .addCase(
        fetchPlants.fulfilled,
        (state, action: PayloadAction<Plant[]>) => {
          state.status = "succeeded";
          state.items = action.payload;
        }
      )
      .addCase(fetchPlants.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Fetch failed";
      });
  },
});

export default plantsSlice.reducer;
