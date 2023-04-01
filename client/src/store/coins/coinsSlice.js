import { createSlice } from "@reduxjs/toolkit";

const coinsSlice = createSlice({
  name: 'coins',
  initialState: {
    fetching: false,
    page: 0,
    data: [],
    apiOnHold: null,
  },
  reducers: {
    setState(state, action) {
      state.fetching = action.payload;
    },
    fetchData(state, action) {
      const payload = action.payload;
      
      if (payload.status === 'ok') {
        if (payload.page > state.page) {
          state.data = [
            ...state.data,
            ...action.payload.data,
          ];

          state.page = action.payload.page;
        }
        
        state.apiOnHold = false;
      } else if (payload.status === 'error') {
        switch (payload.error) {
          case 'limit-reached':
            state.apiOnHold = true;
            break;
          default:
            break;
        }
      }
    },
  },
});

export default coinsSlice;
