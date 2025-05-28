export interface News {
  section: string;
  results: any[];
}

export interface Status {
  status: string;
  message: string;
}

export interface NewsState {
  news: News;
  isStatus: Status;
}
