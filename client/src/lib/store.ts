import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "@/lib/features/counter/newsSlice";

export const store = () => {
  return configureStore({
    reducer: {
      news: newsReducer,
    },
  });
};

export type AppStore = ReturnType<typeof store>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
