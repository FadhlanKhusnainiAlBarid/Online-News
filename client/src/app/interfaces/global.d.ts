type Category = {
  name: string;
  href: string;
  section: string;
};

interface News {
  section: string;
  results: any[];
}

interface SearchNews {
  docs: any[];
  meta: {
    hits: number;
    offset: number;
  };
}

interface IsLoading {
  news: boolean;
  searchNews: boolean;
}

interface Status {
  status: string;
  message: string;
}

interface NewsState {
  news: News;
  isLoading: IsLoading;
  isStatus: Status;
  searchNews: SearchNews;
  search: string;
}
