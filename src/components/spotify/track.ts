import client from "./client";

const getRandomId = (length: number) => {
  const id = Math.floor((Math.random() * 100000) % length);
  return id;
};

export const getTrackInfo = async () => {
  const lists = await client.getPlaylistTracks(
    import.meta.env.VITE_TRUSTLE_SPOTIFY_LIST
  );
  const randomId = getRandomId(lists.items.length);

  console.log("random", randomId);

  return lists.items[randomId].track;
};

export const getTrackLink = async (id: string) => {
  const track = await client.getRecommendations({ seed_tracks: id });

  for (const i of track.tracks) {
    if (i.preview_url) {
      return i.preview_url;
    }
  }
};
