export class Music {
  id: string;
  title: string;
  artist: string;
  genre: string;
  releaseYear: number;
  popularity: number;
  fullText: string;

  constructor(
    id: string,
    title: string,
    artist: string,
    genre: string,
    releaseYear: number,
    popularity: number,
  ) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.popularity = popularity;
    this.fullText = `${title.toLowerCase()} ${artist.toLocaleLowerCase()} ${genre.toLocaleLowerCase()} ${releaseYear}`;
  }
}
