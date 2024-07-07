import { useQuery, UseQueryResult } from "react-query";
import { fetchRequest } from "../../api";

import { Article } from "./useGetAllPopulatArticles.types";
import { getEnvironmentVariables } from "../../utils";

const { NY_TIMES_APP_API_KEY } = getEnvironmentVariables();

export const useGetAllPopulatArticles = (
  selectedPeriod: number
): UseQueryResult<{
  data: {
    results: Article[];
  };
}> => {
  return useQuery({
    queryKey: `https://api.nytimes.com/svc/mostpopular/v2/viewed/${selectedPeriod}.json?api-key=${NY_TIMES_APP_API_KEY}`,
    queryFn: fetchRequest("GET"),
  });
};
