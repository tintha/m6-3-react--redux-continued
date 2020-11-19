const initialState = {
  currentArtist: null,
  status: "iddle",
  error: null,
};

/*
The 'type' for current artist will look like this:
{
  id: 'abc123',
  profile: profile response,
  topTracks: top tracks response,
  relatedArtists: related artists response
}
*/

export default function artistsReducer(state = initialState, action) {
  console.log(action);
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
