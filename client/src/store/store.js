import { configureStore } from "@reduxjs/toolkit";
import coinsSlice from "./coins/coinsSlice";
import fetchDataMiddleware from "./coins/fetchDataMiddleware";

const store = configureStore({
  reducer: {
    coins: coinsSlice.reducer,
  },
  middleware: [fetchDataMiddleware],
});

export default store;
