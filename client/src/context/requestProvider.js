import axios from 'axios';
import { createContext } from "react";

const instance = axios.create({
  baseURL: 'http://localhost:3001/',
});

export const requestInstance = instance;
export const RequestContext = createContext();