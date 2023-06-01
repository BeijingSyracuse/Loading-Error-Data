const initialState = {
  isLoading: false,
  data: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true
      };

    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    case "FETCH_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
