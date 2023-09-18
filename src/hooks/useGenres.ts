import axios from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    setLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {
        cancelToken: source.token,
      })
      .then((response) => {
        setGenres(response.data.results);
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
      source.cancel();
    };
  }, []);

  return { genres, isLoading, error };
};

export default useGenres;
