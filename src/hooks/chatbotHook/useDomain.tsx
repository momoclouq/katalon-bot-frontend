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
  resetDomain?: any;
}

const useDomain = () => {
  const [domainIsLoading, setIsLoading] = useState(false);
  const [domainHasError, setHasError] = useState(false);
  const [domainIsSuccess, setIsSuccess] = useState(false);
  const [domainError, setError] = useState('');
  const [email, setEmail] = useState('notanemail');
  const [domain, setDomain]: [string, any] = useState("");

  const defaultDomain = process.env.defaultDomain || "3d517f8924ac7fd03699a29d97dc52d9";

  useEffect(() => {
    let currentDomain = window.localStorage.getItem("userDomain");

    //add event listener to storage changes, listen for email changes
    window.addEventListener('storage', (event: StorageEvent) => {
      if(event.key === 'userEmail') {
        setEmail(event.newValue);
      }
    });

    if(currentDomain) {
      setDomain(currentDomain);
      setIsSuccess(true);
    }
  }, []);

  const loadingState = () => {
    setIsLoading(true);
    setHasError(false);
    setIsSuccess(false);
    setError('');
    setDomain("");
  }

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
    setDomain('');
  } 

  const resetDomain = () => {
    setIsLoading(false);
    setHasError(false);
    setIsSuccess(false);
    setError('');
    setDomain('');
    setEmail('notanemail');
    window.localStorage.removeItem("userDomain");
  }

  useEffect(() => {
    async function queryDomain() {
      try {
        loadingState();

        let currentEmail = email.trim();
        if(!validate(currentEmail) && currentEmail !== "") {
          throw new Error("Your email is not valid, leave it empty to start using the default personalization or enter a valid email");  
        }
  
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

  return { domainIsLoading, domainIsSuccess, domainHasError, domainError, domain, setEmail, resetDomain };
}

export default useDomain;