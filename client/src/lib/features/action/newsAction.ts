import { AppDispatch } from "../../store";
import {
  setIsStatus,
  setIsLoading,
  setNews,
  setSearchNews,
  setSearch,
} from "@/lib/features/counter/newsSlice";

const API_KEY_NYTIMES: string | undefined = process.env.API_KEY_NYTIMES;

export const Category: Category[] = [
  {
    name: "Home",
    href: "/home",
    section: "home",
  },
  {
    name: "Arts",
    href: "/arts",
    section: "arts",
  },
  {
    name: "AutoMobiles",
    href: "/automobiles",
    section: "automobiles",
  },
  {
    name: "Book/Review",
    href: "/books-review",
    section: "books/review",
  },
  {
    name: "Business",
    href: "/business",
    section: "business",
  },
  {
    name: "Fashion",
    href: "/fashion",
    section: "fashion",
  },
  {
    name: "Food",
    href: "/food",
    section: "food",
  },
  {
    name: "Health",
    href: "/health",
    section: "health",
  },
  {
    name: "Insider",
    href: "/insider",
    section: "insider",
  },
  {
    name: "Magazine",
    href: "/magazine",
    section: "magazine",
  },
  {
    name: "Movies",
    href: "/movies",
    section: "movies",
  },
  {
    name: "Nyregion",
    href: "/nyregion",
    section: "nyregion",
  },
  {
    name: "Obituaries",
    href: "/obituaries",
    section: "obituaries",
  },
  {
    name: "Opinion",
    href: "/opinion",
    section: "opinion",
  },
  {
    name: "Politics",
    href: "/politics",
    section: "politics",
  },
  {
    name: "Real Estate",
    href: "/real-estate",
    section: "realestate",
  },
  {
    name: "Science",
    href: "/science",
    section: "science",
  },
  {
    name: "Sports",
    href: "/sports",
    section: "sports",
  },
  {
    name: "SundayReview",
    href: "/sunday-review",
    section: "sundayreview",
  },
  {
    name: "Technology",
    href: "/technology",
    section: "technology",
  },
  {
    name: "Theater",
    href: "/theater",
    section: "theater",
  },
  {
    name: "TMagazine",
    href: "/t-magazine",
    section: "tmagazine",
  },
  {
    name: "Travel",
    href: "/travel",
    section: "travel",
  },
  {
    name: "Upshot",
    href: "/upshot",
    section: "upshot",
  },
  {
    name: "US",
    href: "/us",
    section: "us",
  },
  {
    name: "World",
    href: "/world",
    section: "world",
  },
];

export const fetchNews =
  (section: string) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(setIsLoading({ news: true, searchNews: false }));
      dispatch(setIsStatus({ status: "", message: "" }));
      const response = await fetch(
        `https://api.nytimes.com/svc/topstories/v2/${
          Category.find(
            (category: Category) => category.href.slice(1) === section
          )?.section
        }.json?api-key=${API_KEY_NYTIMES}`,
        {
          cache: "force-cache",
        }
      );
      const data = await response.json();
      dispatch(
        setNews({
          section: section,
          results: data.results ? data.results : [],
        })
      );
    } catch (error: Error | any) {
      console.error("Error fetching news:", error);
      dispatch(setIsStatus({ status: "error", message: error.message }));
    } finally {
      // delay 3 seconds
      setTimeout(() => {
        dispatch(setIsLoading({ news: false, searchNews: false }));
      }, 3000);
    }
  };

export const fetchSearchNews =
  (search: string, page: number) =>
  async (dispatch: AppDispatch): Promise<void> => {
    try {
      dispatch(setIsLoading({ news: false, searchNews: true }));
      dispatch(setIsStatus({ status: "", message: "" }));
      const response = await fetch(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&page=${page}&api-key=${API_KEY_NYTIMES}`
      );
      const data = await response.json();
      dispatch(
        setSearchNews({
          docs: data.response.docs ? data.response.docs : [],
          meta: {
            hits: data.response.metadata.hits,
            offset: data.response.metadata.offset,
          },
        })
      );
    } catch (error: Error | any) {
      console.error("Error fetching news:", error);
      dispatch(setIsStatus({ status: "error", message: error.message }));
    } finally {
      // delay 3 seconds
      // setTimeout(() => {
      dispatch(setIsLoading({ news: false, searchNews: false }));
      // }, 3000);
    }
  };

export const TextSearch = (search: string) => (dispatch: AppDispatch) => {
  dispatch(setSearch(search));
};
