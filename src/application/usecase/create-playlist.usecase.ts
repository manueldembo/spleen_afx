import { Injectable } from '@nestjs/common';
import { PlayList } from 'src/domain/entities/playlist';
import { PlayListRepository } from 'src/domain/repositores/playlist-repository.interface';

@Injectable()
export class CreatePlaylistUsecase {
  constructor(private readonly playlistRepository: PlayListRepository) {}

  async execute(
    name: string,
    category: string,
    ownerId: string,
  ): Promise<void> {
    const playlist = new PlayList(null, name, category, ownerId);
    await this.playlistRepository.create(playlist);
  }
}
