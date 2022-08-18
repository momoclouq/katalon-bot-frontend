import { IntentRecognitionResponse } from "./IntentRecognition";
import { SemanticSearchResponse } from "./SemanticSearch";

export type QueryResponse = SemanticSearchResponse | IntentRecognitionResponse;