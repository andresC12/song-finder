interface Artist {
  name: string;
}

interface Album {
  cover: string;
}

export default interface Song {
  id: any;
  title_short: string;
  description: string;
  explicit_lyrics: boolean;
  artist: Artist;
  album: Album;
}
