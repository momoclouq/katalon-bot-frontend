export type CarouselCard = {
  resource_title: string;
  resource_url: string;
}

export type IntentRecognitionResponse = {
  classified: boolean;
  id: string,
  mainMessage: string,
  carouselCards: CarouselCard[];
} | null;