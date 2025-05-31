import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: {
      section: "",
      results: [],
    },
    isLoading: {
      news: false,
      searchNews: false,
    },
    isStatus: {
      status: "",
      message: "",
    },
    searchNews: {
      docs: [],
      meta: {
        hits: 0,
        offset: 0,
      },
    },
    search: "",
  } as NewsState,
  reducers: {
    setNews: (state, action: PayloadAction<News>) => {
      state.news = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<IsLoading>) => {
      state.isLoading = action.payload;
    },
    setIsStatus: (state, action: PayloadAction<Status>) => {
      state.isStatus = action.payload;
    },
    setSearchNews: (state, action: PayloadAction<any>) => {
      state.searchNews = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
});

export const { setNews, setIsLoading, setIsStatus, setSearchNews, setSearch } =
  newsSlice.actions;
export default newsSlice.reducer;
