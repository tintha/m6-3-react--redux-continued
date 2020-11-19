const initalState = {
  token: null,
  status: "iddle",
};

export default function authReducer(state = initalState, action) {
  switch (action.type) {
    case "REQUEST_ACCESS_TOKEN": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ACCESS_TOKEN": {
      return {
        ...state,
        token: action.token,
        status: "iddle",
      };
    }
    case "RECEIVE_ACCESS_TOKEN_ERROR": {
      return {
        ...state,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
