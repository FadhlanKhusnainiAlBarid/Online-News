import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NewsState, News, Status } from "@/type";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: {
      section: "",
      results: [],
    },
    isStatus: {
      status: "",
      message: "",
    },
  } as NewsState,
  reducers: {
    setNews: (state, action: PayloadAction<News>) => {
      state.news = action.payload;
    },
    setIsStatus: (state, action: PayloadAction<Status>) => {
      state.isStatus = action.payload;
    },
  },
});

export const { setNews, setIsStatus } = newsSlice.actions;
export default newsSlice.reducer;
