export const SearchVid = (SearchText) => {
  const url = `https://youtube.thorsteinsson.is/api/search?q=${SearchText}`;
  return fetch(url).then((res) => res.json());
};

export const VidId = (Vid) => {
  const url = `https://youtube.thorsteinsson.is/api/playlists/${Vid}`;
  return fetch(url).then((res) => res.json());
};

export const GetPlaylist = (GetPlay) => {
  const url = `https://youtube.thorsteinsson.is/api/playlists/${GetPlay}`;
  return fetch(url).then((res) => res.json());
};

export const CreatePlaylist = async (listname) => {
  const url = `https://youtube.thorsteinsson.is/api/playlists`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: listname,
    }),
  }).then((res) => res.json());
};

export const UpdatePlaylist = (Id, NewName, Vid) => {
  const url = `https://youtube.thorsteinsson.is/api/playlists/${Id}`;
  return fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      videos: Vid,
    }),
  }).then((res) => res.json());
};
