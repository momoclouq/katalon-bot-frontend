import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { ChatResponse } from "../../typings/ChatBot";
import { QueryResponse } from "../../typings/RawResponse";
import { processIntentData, processSemanticData } from "../../utils/data-transform";

const baseURL = process.env.REACT_APP_FULL_PIPELINE;

export type ChatResult = {
  intentRecognitionChat: ChatResponse;
  semanticSearchChat: ChatResponse;
}

export type ChatbotQueryState = {
  isLoading?: boolean;
  hasError?: boolean;
  isSuccess?: boolean;
  error?: string;
  result?: ChatResult | null;
}

const useChatbotQuery = ({query, domain}: { query: string; domain: string; }): ChatbotQueryState => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult]: [ChatResult | null, any] = useState(null);

  const loadingState = () => {
    setIsLoading(true);
    setHasError(false);
    setIsSuccess(false);
    setError('');
    setResult(null);
  }

  const successState = (response: QueryResponse) => {
    const result: ChatResult = {
      semanticSearchChat: processSemanticData(response),
      intentRecognitionChat: processIntentData(response)
    };
    
    setIsLoading(false);
    setHasError(false);
    setIsSuccess(true);
    setError('');
    setResult(result);
  }

  const errorState = ({ error }: { error: string }) => {
    setIsLoading(false);
    setHasError(true);
    setIsSuccess(false);
    setError(error);
    setResult(null);
  } 

  useEffect(() => {
    async function queryChatbot() {
      try {
        loadingState();

        const response = await axios.post(baseURL, {
          domain: domain,
          query: query 
        });
  
        successState(response.data as QueryResponse);
      } catch (err: unknown) {
        console.log((err as any).message);
        if (axios.isAxiosError(err))  {
          console.log("Raw error: ", err);
          const message = (err.response as any)?.data?.error || 'unknown error';
          errorState({ error: message });
        } else {
          console.log(err);
          errorState({
            error: (err as Error).message
          });
        }
      }
    }

    if (query !== '') queryChatbot();
  }, [query])

  return {
    isLoading, hasError, isSuccess, error, result
  };
}

export default useChatbotQuery;