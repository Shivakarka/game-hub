import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import axios from "axios";

export interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    apiClient
      .get<FetchGamesResponse>("/games", {
        cancelToken: source.token,
        signal: controller.signal,
      })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (axios.isCancel(error)) {
          return;
        }
        setError(error.message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, error };
};

export default useGames;
