import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        cancelToken: source.token,
        signal: controller.signal,
      })
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          return;
        }
        setError(error.message);
        setLoading(false);
      });

    return () => {
      controller.abort();
      source.cancel();
    };
  }, []);

  return { data, isLoading, error };
};

export default useData;
