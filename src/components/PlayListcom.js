import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { PlaylistContext } from "../App";
import { UpdatePlaylist } from "../Apis";
import Player from "./Player";
import {
  PlaylistForm,
  Thumbnail,
  Playbtn,
  RemoveVidBtn,
  Row,
  Playlist,
  Vidtitle,
} from "./PlayListcom.styled";

function PlayListcom() {
  const { playlistId } = useParams();
  const { data } = useContext(PlaylistContext);
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  // 	setIndex(Math.max(0, Math.min(index, data.length - 1)));
  // }, [index]);

  if (!data || !data.videos) {
    return <p>loading...</p>;
  }

  return (
    <PlaylistForm>
      {/* <h2>{data.name}</h2> */}
      {/* <p>Playlist id {playlistId}</p> */}

      <Player
        id={data.videos[index]?.id.videoId}
        playNext={() => {
          if (index + 1 < data.videos.length) {
            setIndex(index + 1);
          }
        }}
      />

      <ul>
        {data.videos.map((item, idx) => (
          <Playlist>
            <li key={item.id.videoId}>
              <Row>
                <div className="right-col">
                  <Thumbnail src={item.snippet.thumbnails.url} alt="" />
                </div>
                <div className="left-col">
                  {idx === index && <strong>PLAYING</strong>}

                  <Vidtitle>{item.title}</Vidtitle>
                  <Playbtn
                    onClick={(e) => {
                      e.preventDefault();
                      setIndex(idx);
                    }}
                  >
                    play this video
                  </Playbtn>
                  <br />
                  <RemoveVidBtn
                    onClick={async (e) => {
                      e.preventDefault();

                      const videoList = data.videos.filter(
                        (idx) => idx !== item
                      );

                      await UpdatePlaylist(playlistId, "", videoList);
                    }}
                  >
                    remove
                  </RemoveVidBtn>
                </div>
              </Row>
            </li>
          </Playlist>
        ))}
      </ul>
    </PlaylistForm>
  );
}

export default PlayListcom;
