import { QueryFunctionContext } from "@tanstack/react-query";

export const fetcher = async (params: QueryFunctionContext<string[], any>) => {
  const response = await fetch(
    `https://api.getAddress.io/find/${params.queryKey[1]}?api-key=${process.env.REACT_APP_GET_ADDRESS_API_URL}&expand=true `
  );
  return await response.json();
};
export const suggestfetcher = async (
  params: QueryFunctionContext<string[], any>
) => {
  const response = await fetch(
    `https://api.getAddress.io/autocomplete/${params.queryKey[1]}?api-key=${process.env.REACT_APP_GET_ADDRESS_API_URL}&expand=true `
  );
  return await response.json();
};
export const idFetcher = async (
  params: QueryFunctionContext<string[], any>
) => {
  const response = await fetch(
    `https://api.getAddress.io/get/${params.queryKey[1]}?api-key=${process.env.REACT_APP_GET_ADDRESS_API_URL}&expand=true `
  );
  return await response.json();
};
