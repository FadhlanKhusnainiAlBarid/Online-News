import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NewsState } from "@/type";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    isLoading: false,
    isStatus: {
      status: "",
      message: "",
    },
  } as NewsState,
  reducers: {
    setNews: (state, action: PayloadAction<any[]>) => {
      state.news = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setIsStatus: (
      state,
      action: PayloadAction<{ status: string; message: string }>
    ) => {
      state.isStatus = action.payload;
    },
  },
});

export const { setNews, setIsLoading, setIsStatus } = newsSlice.actions;
export default newsSlice.reducer;
