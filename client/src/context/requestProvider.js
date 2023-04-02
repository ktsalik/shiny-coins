import axios from 'axios';
import { createContext } from "react";

const instance = axios.create({
  baseURL: 'https://shiny-coins.onrender.com/api/',
});

export const requestInstance = instance;
export const RequestContext = createContext();