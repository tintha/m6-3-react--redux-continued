const initialState = {
  currentArtist: null,
  status: "iddle",
  error: null,
};

export default function artistsReducer(state = initialState, action) {
  switch (action.type) {
    case "REQUEST_ARTIST_PROFILE": {
      return {
        ...state,
        status: "loading",
      };
    }
    case "RECEIVE_ARTIST_PROFILE": {
      return {
        ...state,
        status: "sucessful",
        currentArtist: {
          profile: { ...action.data },
        },
      };
    }
    case "RECEIVE_ARTIST_ERROR": {
      return {
        ...state,
        currentArtist: null,
        error: action.error,
        status: "error",
      };
    }
    default: {
      return state;
    }
  }
}
