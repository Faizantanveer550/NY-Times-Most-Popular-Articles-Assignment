import { useQuery, UseQueryResult } from "react-query";
import { fetchRequest } from "../../api";
import { Article } from "./useGetAllPopulatArticles.types";

export const useGetAllPopulatArticles = (
  selectedPeriod: number
): UseQueryResult<{
  data: {
    results: Article[];
  };
}> => {
  return useQuery({
    queryKey: `https://api.nytimes.com/svc/mostpopular/v2/viewed/${selectedPeriod}.json?api-key=Rwq78xNMIGfGSqaRexi0zT75lXaGiGKp`,
    queryFn: fetchRequest("GET"),
  });
};
