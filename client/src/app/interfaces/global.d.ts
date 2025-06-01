type Category = {
  name: string;
  href: string;
  section: string;
};

interface Multimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

interface NewsResult {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: Multimedia[];
  short_url: string;
}

interface News {
  section: string;
  results: NewsResult[];
}

interface SearchNewsResult {
  abstract: string;
  web_url: string; // Article URL
  snippet: string;
  print_page?: number; // Page in print (e.g. 1)
  print_section?: string; // Section in print (e.g. A)
  source?: string;
  multimedia: {
    caption: string;
    credit: string;
    default: {
      url: string;
      height: number;
      width: number;
    };
    thumbnail: {
      url: string;
      height: number;
      width: number;
    };
  };
  headline: {
    main: string;
    kicker?: string;
    content_kicker?: string;
    print_headline?: string;
    name?: string;
    seo?: string;
    sub?: string;
  };
  keywords: Array<{
    name: string;
    value: string;
    rank?: number;
    major?: string;
  }>;
  pub_date: string; // Publication date
  document_type: string; // (article, multimedia)
  desk?: string; // Desk in the newsroom (Business, Foreign, Metro, ...)
  section_name?: string; // (Arts, New York, World, ...)
  byline?: {
    original?: string;
    person?: Array<{
      firstname?: string;
      middlename?: string;
      lastname?: string;
      role?: string;
      organization?: string;
      rank?: number;
    }>;
    organization?: string;
  };
  type_of_material?: string; // (Correction, News, Op-Ed, Review, Video, ...)
  word_count?: number; // Number of words
  uri: string; // Uniquely identifies an asset
}

interface SearchNews {
  docs: SearchNewsResult[];
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
