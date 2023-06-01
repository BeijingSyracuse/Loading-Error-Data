import axios from "axios";

const fetchStart = () => ({
  type: "FETCH_START"
});

const fetchSuccess = (data) => ({
  type: "FETCH_SUCCESS",
  payload: data
});

const fetchError = (error) => ({
  type: "FETCH_ERROR",
  payload: error
});

export const fetchData = () => (dispatch) => {
  dispatch(fetchStart());
  axios
    .get(`https://api.instantwebtools.net/v1/passenger?page=1&size=1000`)
    .then((res) => dispatch(fetchSuccess(res.data.data)))
    .catch((error) => dispatch(fetchError(error)));
};
