import axios from "axios";
import { validate } from "email-validator";
import { useEffect, useState } from "react";

const baseURL = process.env.REACT_APP_DOMAIN_SEARCH;

export type DomainState = {
  domainIsLoading?: boolean;
  domainHasError?: boolean;
  domainIsSuccess?: boolean;
  domainError?: string;
  setEmail?: any;
  domain?: string | null;
}

const useDomain = () => {
  const [domainIsLoading, setIsLoading] = useState(false);
  const [domainHasError, setHasError] = useState(false);
  const [domainIsSuccess, setIsSuccess] = useState(false);
  const [domainError, setError] = useState('');
  const [email, setEmail] = useState('notanemail');
  const [domain, setDomain]: [string, any] = useState("");

  const defaultDomain = process.env.defaultDomain || "";

  const loadingState = () => {
    setIsLoading(true);
    setHasError(false);
    setIsSuccess(false);
    setError('');
    setDomain("");
  }

  useEffect(() => {
    let currentDomain = window.localStorage.getItem("userDomain");

    if(currentDomain) {
      setDomain(currentDomain);
      setIsSuccess(true);
    }
  }, []);

  const successState = ({ domain }: { domain: string }) => {
    setIsLoading(false);
    setHasError(false);
    setIsSuccess(true);
    setError('');
    setDomain(domain);

    if (domain !== defaultDomain) window.localStorage.setItem("userDomain", domain);
  }

  const errorState = ({ error }: { error: string }) => {
    setIsLoading(false);
    setHasError(true);
    setIsSuccess(false);
    setError(error);
    setDomain(defaultDomain);
  } 

  useEffect(() => {
    async function queryDomain() {
      try {
        loadingState();

        let currentEmail = email.trim();
        if(!validate(currentEmail) && currentEmail !== "") throw new Error("Your email is not valid, leave it empty to start using the default personalization or enter a valid email");  
  
        const response = await axios.get(baseURL, {
          params: {
            email: currentEmail || 'NONE'
          }
        });

        successState(response.data);
      } catch (err) {
        console.log(err);
        errorState({
          error: (err as Error).message
        })
      }
    }
    
    if(email !== 'notanemail') queryDomain();
  }, [email]);

  return { domainIsLoading, domainIsSuccess, domainHasError, domainError, domain, setEmail };
}

export default useDomain;