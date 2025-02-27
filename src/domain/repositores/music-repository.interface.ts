import { Music } from '../entities/music';

export interface MusicRepository {
  search(filters: Filter): Promise<Music[]>;
  findById(id: string): Promise<Music | undefined>;
  update(music: Music): Promise<void>;
}

export interface Filter {
  query: string;
  artist: string;
  genre: string;
}
