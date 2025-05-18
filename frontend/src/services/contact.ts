import { AxiosRequestConfig } from "axios";
import { api } from "./base";
import { PaginatedResponse } from "../types";
import { Contact } from "../types/contact";

export const getContactListAPI = (options: AxiosRequestConfig = {}) => {
  return api.get<PaginatedResponse<Contact>>("/passenger", options);
};

export const getContactByIdAPI = (
  id: number,
  options: AxiosRequestConfig = {}
) => {
  return api.get<Contact>(`/passenger/${id}`, options);
};
