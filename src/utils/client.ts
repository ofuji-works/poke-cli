import axios from "axios"

export type { AxiosResponse, AxiosError } from "axios"

export const client = axios.create({
  headers: {
    type: "application/json",
  },
  baseURL: "https://pokeapi.co/api/v2",
  responseType: "json",
})
