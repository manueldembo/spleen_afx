export class Music {
  id: string;
  title: string;
  artist: string;
  genre: string;
  releaseYear: number;
  popularity: number;
  fileUrl?: string;
  fullText: string;

  constructor(
    id: string,
    title: string,
    artist: string,
    genre: string,
    releaseYear: number,
    popularity: number,
    fileUrl?: string,
  ) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.popularity = popularity;
    this.fullText = `${title.toLowerCase()} ${artist.toLowerCase()} ${genre.toLowerCase()} ${releaseYear}`;
    this.fileUrl = fileUrl;
  }
}
