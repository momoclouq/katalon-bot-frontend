import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const baseURL = process.env.baseUrl || "http://localhost:5000/query";

const useChatbotQuery = ({query}: { query: string }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    console.log(baseURL);
    async function queryChatbot() {
      try {
        const data = await axios.get(baseURL, {
          params: {
            query: query
          }
        });
  
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    queryChatbot();
  }, [query])

  return {
    isLoading, hasError, isSuccess, error, result
  };
}

export default useChatbotQuery;