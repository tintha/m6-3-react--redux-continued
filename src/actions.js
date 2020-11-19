export const requestAccessToken = () => ({
  type: "REQUEST_ACCESS_TOKEN",
});

export const receiveAccessToken = (token) => ({
  type: "RECEIVE_ACCESS_TOKEN",
  token,
});

export const receiveAccessTokenError = () => ({
  type: "RECEIVE_ACCESS_TOKEN_ERROR",
});

export const requestArtistProfile = () => ({
  type: "REQUEST_ARTIST_PROFILE",
});

export const receiveArtistProfile = (data) => ({
  type: "RECEIVE_ARTIST_PROFILE",
  data,
});

export const receiveArtistError = (error) => ({
  type: "RECEIVE_ARTIST_ERROR",
  error,
});
