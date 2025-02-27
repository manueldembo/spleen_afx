import { Music } from '../entities/music';

export interface MusicRepository {
  search(query: string): Promise<Music[]>;
}
