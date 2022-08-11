export type SemanticSearchResponseItem = {
  document_id: number;
  sentence_id: number;
  title: string;
  url: string;
  sentence: string;
};

export type SemanticSearchResponse = {
  classified: boolean;
  response: SemanticSearchResponseItem[];
  topics: string[];
}