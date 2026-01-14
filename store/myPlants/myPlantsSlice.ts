import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MyPlantsSliceState = {
  ids: string[];
};

const initialState: MyPlantsSliceState = {
  ids: [],
};

const myPlantsSlice = createSlice({
  name: "myPlants",
  initialState,
  reducers: {
    toggleAddMyPlant(state, action: PayloadAction<string>) {
      const id = action.payload;
      const index = state.ids.indexOf(id);

      if (index === -1) {
        state.ids.push(id);
      } else {
        state.ids.splice(index, 1);
      }
    },
  },
});

export const { toggleAddMyPlant } = myPlantsSlice.actions;
export default myPlantsSlice.reducer;
