import { AppDispatch } from "../../store";
import { setIsStatus, setNews } from "@/lib/features/counter/newsSlice";

const API_KEY_NYTIMES: string | undefined = process.env.API_KEY_NYTIMES;

export const fetchNews =
  (section: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${API_KEY_NYTIMES}`,
        {
          cache: "force-cache",
        }
      );
      const data = await response.json();
      dispatch(
        setNews({
          section: section,
          results: data.results,
        })
      );
    } catch (error: any) {
      console.error("Error fetching news:", error);
      dispatch(setIsStatus({ status: "error", message: error.message }));
    }
  };
