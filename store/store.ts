import { configureStore } from "@reduxjs/toolkit";
import plantsReducer from "./plants/plantsSlice";
import favoritesReducer from "./favorites/favoritesSlice";
import myPlantsReducer from "./myPlants/myPlantsSlice";

export const store = configureStore({
  reducer: {
    plants: plantsReducer,
    favorites: favoritesReducer,
    myPlants: myPlantsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
