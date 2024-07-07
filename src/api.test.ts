import axios from "axios";

import { fetchRequest } from "./api";

jest.mock("axios"); // Mock the axios module

test("fetchRequest returns a promise", () => {
  const url =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Rwq78xNMIGfGSqaRexi0zT75lXaGiGKp";
  const fetchFunction = fetchRequest(); // No method specified

  expect(fetchFunction({ queryKey: [url], meta: undefined })).toBeInstanceOf(
    Promise
  );
});

test("fetchRequest sets default timeout and method (GET)", () => {
  const url =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Rwq78xNMIGfGSqaRexi0zT75lXaGiGKp";
  const fetchFunction = fetchRequest(); // No method specified
  const mockAxios = jest.mocked(axios);

  fetchFunction({ queryKey: [url], meta: undefined });

  expect(mockAxios.get).toHaveBeenCalledWith(url, { timeout: 30000 });
});

test("fetchRequest uses specified method", () => {
  const url =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Rwq78xNMIGfGSqaRexi0zT75lXaGiGKp";
  const mockAxios = jest.mocked(axios);

  const getFunction = fetchRequest("GET");
  const postFunction = fetchRequest("POST");

  getFunction({ queryKey: [url], meta: undefined });
  postFunction({ queryKey: [url], meta: undefined });

  expect(mockAxios.get).toHaveBeenCalledWith(url, { timeout: 30000 });
  expect(mockAxios.post).toHaveBeenCalledWith(url, { timeout: 30000 });
});

test("fetchRequest throws errors from axios", async () => {
  const url =
    "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=Rwq78xNMIGfGSqaRexi0zT75lXaGiGKp";
  const mockAxios = jest.mocked(axios);
  (mockAxios.get as jest.Mock).mockRejectedValue(new Error("Network Error"));

  const fetchFunction = fetchRequest();

  await expect(
    fetchFunction({ queryKey: [url], meta: undefined })
  ).rejects.toThrowError("Network Error");
});
