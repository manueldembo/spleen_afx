import { PlayList } from '../entities/playlist';

export interface PlayListRepository {
  create(playlist: PlayList): Promise<void>;
  findAll(): Promise<PlayList[]>;
}
