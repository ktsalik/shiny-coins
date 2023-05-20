import axios from 'axios';
import { createContext } from "react";

const instance = axios.create({
  baseURL: 'https://shinycoins.cyclic.app/api/',
});

export const requestInstance = instance;
export const RequestContext = createContext();