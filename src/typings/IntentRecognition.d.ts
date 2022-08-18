export type CarouselCard = {
  resource_title: string;
  resource_url: string;
}

export type IntentRecognitionResponse = {
  classified: boolean;
  response: {
    id: string;
    response: string;
    carousel: CarouselCard[]
  };
  topics: string[]
};