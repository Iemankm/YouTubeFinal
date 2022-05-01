import React, { useContext } from "react";
import { AppContext, PlaylistContext } from "../App";
import styled from "styled-components";
import { SearchVid } from "../Apis";
import { UpdatePlaylist } from "../Apis";
import useSWR from "swr";
import {
  VidList,
  VidItem,
  VidThumbnail,
  AddtoListbtn,
} from "./VideoList.styled";

function VideoList() {
  const { searchTerm } = useContext(AppContext);
  const { data: playlistData, playlistId } = useContext(PlaylistContext);

  const { data, error } = useSWR(searchTerm, SearchVid);

  if (error) return <div>failed to load</div>;

  return (
    <VidList>
      {data?.map((video, index) => (
        <VidItem classname="leftt">
          <li key={index}>
            <VidThumbnail src={video.snippet.thumbnails.url} alt="" />
            {video.title}
            <br />
            <AddtoListbtn
              type="submit"
              onClick={async (e) => {
                e.preventDefault();

                const videoList = [...playlistData.videos, video];

                await UpdatePlaylist(playlistId, "", videoList);
              }}
            >
              Add to Playlist
            </AddtoListbtn>
          </li>
        </VidItem>
      ))}
    </VidList>
  );
}

export default VideoList;
