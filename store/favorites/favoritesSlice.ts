import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type FavoritesState = {
  ids: string[];
};

const initialState: FavoritesState = {
  ids: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<string>) {
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

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
