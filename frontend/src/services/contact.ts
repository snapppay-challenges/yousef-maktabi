import { AxiosRequestConfig } from "axios";
import { api } from "./base";
import { Contact, PaginatedResponse } from "src/types";

export const getContactListAPI = (options: AxiosRequestConfig = {}) => {
  return api.get<PaginatedResponse<Contact>>("/passenger", options);
};

export const getContactByIdAPI = (
  id: number,
  options: AxiosRequestConfig = {}
) => {
  return api.get<Contact>(`/passenger/${id}`, options);
};
