import { ChatResponse } from "../typings/ChatBot";
import { IntentRecognitionResponse } from "../typings/IntentRecognition";
import { QueryResponse } from "../typings/RawResponse";
import { SemanticSearchResponse } from "../typings/SemanticSearch";

export const processIntentData = (data: QueryResponse): ChatResponse => {
  if (!data.classified) return {
    isBot: true,
    sentence: 'Looks like we have a difficult question!',
    recommendations: [],
    topics: []
  }

  const { response, topics } = data as IntentRecognitionResponse;

  return {
    isBot: true,
    sentence: response.response,
    recommendations: response.carousel.map((value) => {
      return {
        title: value.resource_title,
        url: value.resource_url,
      };
    }),
    topics
  };
};

export const processSemanticData = (data: QueryResponse): ChatResponse => {
  if (!data.classified) {
    const { response, topics } = data as SemanticSearchResponse;
    return {
      isBot: true,
      sentence: '',
      recommendations: response.map((document) => {
        return {
          title: document.title,
          subtitle: document.sentence,
          url: document.url,
        };
      }),
      topics
    };
  }

  return {
    isBot: true,
    sentence: '',
    recommendations: [],
    topics: []
  };
};
