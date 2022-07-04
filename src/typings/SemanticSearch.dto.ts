export type CarouselCard = {
  resource_title: string;
  resource_url: string;
}

export type SemanticSearchResponse = {
  mainMessage: string;
  subMessage: string;
  url: string;
}[];

export type SemanticSearchData = {
  isBot: boolean;
  sentence: string;
  recommendations: {
    title: string;
    url: string;
  }[];
}