import { Music } from '../entities/music';

export interface MusicRepository {
  search(filters: Filter): Promise<Music[]>;
}

export interface Filter {
  query: string;
  artist: string;
}
