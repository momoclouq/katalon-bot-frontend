import { IntentRecognitionData, IntentRecognitionResponse } from "../typings/IntentRecognition.dto";
import { SemanticSearchData, SemanticSearchResponse } from "../typings/SemanticSearch.dto";

export const processIntentData = ({ 
  classified, 
  id, 
  mainMessage, 
  carouselCards 
}: IntentRecognitionResponse): IntentRecognitionData => {
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

export const processSemanticData = (documents: SemanticSearchResponse): SemanticSearchData => {
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
