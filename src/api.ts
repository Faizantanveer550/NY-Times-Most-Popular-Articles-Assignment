import axios from "axios";

import { QueryFunctionContext, QueryKey } from "react-query";

type ApiMethods = "GET" | "POST" | "PUT" | "DELETE";

export function fetchRequest(
  method?: ApiMethods
): (_params: QueryFunctionContext<QueryKey>) => Promise<unknown> {
  const promise = ({
    queryKey,
  }: QueryFunctionContext<QueryKey>): Promise<unknown> => {
    return axios({
      timeout: 30000,
      url: queryKey?.[0] as string,
      method: method || "GET",
    })
      .then((res) => res)
      .catch((err) => {
        throw err;
      });
  };

  return promise;
}
