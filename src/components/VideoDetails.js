import React from "react";
import Player from "./Player";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VidId } from "../Apis";

function VideoDetails() {
  const VidDet = styled.div`
    padding-left: 40%;
    padding-top: 20px;
    width: 600px;
  `;
  let { videoId } = useParams();

  const { data, error } = useSWR(videoId, VidId);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>.</div>;
  return (
    <>
      <VidDet>
        <h1>{data.title}</h1>
        <Player id={data.url} />
        <div>
          {data?.map((video, index) => (
            <div classname="leftt">
              <Link to={`videos/${video.id.videoId}`}>
                <li key={index}>
                  <img src={video.snippet.thumbnails.url} alt="" />
                  {video.title}
                  &nbsp;
                  <button type="submit">Add to Playlist</button>
                </li>
              </Link>
            </div>
          ))}
        </div>
      </VidDet>
    </>
  );
}

export default VideoDetails;
