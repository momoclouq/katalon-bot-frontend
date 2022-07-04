export type CarouselCard = {
  resource_title: string;
  resource_url: string;
}

export type IntentRecognitionResponse = {
  classified: boolean;
  id: string,
  mainMessage: string,
  carouselCards: CarouselCard[];
}

export type IntentRecognitionData = {
  isBot: boolean;
  sentence: string;
  recommendations: {
    title: string;
    url: string;
  }[];
}