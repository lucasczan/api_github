import useSWR from "swr";
import api from "../services/api";

export function useFetch(url) {
  const { data, error, mutate } = useSWR(url, async (url) => {
    const response = await api.get(url);
    console.log("fez");
    return response.data;
  });

  return {
    data,
    error,
    mutate,
  };
}
