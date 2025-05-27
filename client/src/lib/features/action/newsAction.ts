import { AppDispatch } from "../../store";
import {
  setIsLoading,
  setIsStatus,
  setNews,
} from "@/lib/features/counter/newsSlice";

const API_KEY_NYTIMES: string | undefined = process.env.API_KEY_NYTIMES;

export const fetchNews =
  () =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY_NYTIMES}`,
        {
          cache: "force-cache",
        }
      );
      const data = await response.json();
      dispatch(setNews(data));
    } catch (error: any) {
      console.error("Error fetching news:", error);
      dispatch(setIsStatus({ status: "error", message: error.message }));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
