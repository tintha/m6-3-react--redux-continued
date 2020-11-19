import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchArtistProfile } from "../helpers/api-helpers";
import { useDispatch } from "react-redux";
import {
  requestArtistProfile,
  receiveArtistProfile,
  receiveArtistError,
} from "../actions";

import Header from "./Artist/Header";
import Followers from "./Artist/Followers";
import Tags from "./Artist/Tags";

// nFormatter function taken from
// https://stackoverflow.com/questions/9461621/format-a-number-as-2-5k-if-a-thousand-or-more-otherwise-900
function nFormatter(num) {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "G";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
  }
  return num;
}

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.auth.token);
  const artistProfile = useSelector((state) => state.artists.currentArtist);
  let tags;
  if (artistProfile) {
    if (artistProfile.profile.genres.length > 2) {
      tags = artistProfile.profile.genres.splice(0, 2);
    } else {
      tags = artistProfile.profile.genres;
    }
  }
  const artistId = useParams().id;

  React.useEffect(() => {
    if (!accessToken) {
      return;
    }
    console.log(accessToken);
    dispatch(requestArtistProfile());
    fetchArtistProfile(accessToken, artistId).then((data) => {
      dispatch(receiveArtistProfile(data));
    });
  }, [artistId, accessToken]);

  return (
    <>
      {artistProfile && (
        <>
          <Header
            name={artistProfile.profile.name}
            srcUrl={artistProfile.profile.images[0].url || null}
          />
          <Followers
            numFollowers={nFormatter(artistProfile.profile.followers.total)}
          />

          <Tags tags={tags} />
        </>
      )}
    </>
  );
};

export default ArtistRoute;
