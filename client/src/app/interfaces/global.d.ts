type Category = {
  name: string;
  href: string;
  section: string;
};

interface News {
  section: string;
  results: any[];
}

interface Status {
  status: string;
  message: string;
}

interface NewsState {
  news: News;
  isStatus: Status;
}
