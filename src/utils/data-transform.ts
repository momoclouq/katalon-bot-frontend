import { ChatResponse } from "../typings/ChatBot";
import { IntentRecognitionResponse } from "../typings/IntentRecognition";
import { SemanticSearchResponse } from "../typings/SemanticSearch";

export const processIntentData = ({ 
  classified, 
  id,
  mainMessage,
  carouselCards
}: IntentRecognitionResponse): ChatResponse => {
  if (id === "fallback" || !classified)
    return {
      isBot: true,
      sentence: mainMessage,
      recommendations: [],
    };

  return {
    isBot: true,
    sentence: mainMessage,
    recommendations: carouselCards.map((value) => {
      return {
        title: value.resource_title,
        url: value.resource_url,
      };
    }),
  };
};

export const processSemanticData = (documents: SemanticSearchResponse): ChatResponse => {
  if (Array.isArray(documents) && documents.length > 0) {
    return {
      isBot: true,
      sentence: '',
      recommendations: documents.map((document) => {
        return {
          title: document.mainMessage,
          subtitle: document.subMessage,
          url: document.url,
        };
      }),
    };
  }

  return {
    isBot: true,
    sentence: '',
    recommendations: []
  };
};
