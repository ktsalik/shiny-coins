import { requestInstance as request } from "../../context/requestProvider";

const fetchDataMiddleware = (store) => (next) => (action) => {
  if (action.type === 'coins/fetchData') {
    request.get(`/coins?page=${action.payload.page}`).then((response) => {
      if (response.data.constructor === Array) {
        action.payload.status = 'ok';
        action.payload.data = response.data;
      } else {
        action.payload.status = 'unknown';
        action.payload.data = [];
      }

      if (response.data.status && response.data.status.error_code === 429) {
        action.payload.status = 'error';
        action.payload.error = 'limit-reached';
      }

      next(action);
    });
  } else {
    next(action);
  }
};

export default fetchDataMiddleware;
