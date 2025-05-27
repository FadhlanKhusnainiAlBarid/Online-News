export interface NewsState {
  news: any[];
  isLoading: boolean;
  isStatus: {
    status: string;
    message: string;
  };
}
