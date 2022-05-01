import React from "react";
import Youtube from "react-youtube";

const Player = ({ id, playNext }) => {
  return (
    <Youtube
      videoId={id}
      onEnd={playNext}
      opts={{
        playerVars: {
          autoplay: 1,
        },
      }}
    />
  );
};

export default Player;
