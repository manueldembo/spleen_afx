import { Inject } from '@nestjs/common';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';
import { NotFoundError } from '../helpers/http.helper';

export class UpdatePlaylistUseCase {
  constructor(
    @Inject('PlaylistRepository')
    private readonly playlistRepository: PlaylistRepository,
  ) {}

  async execute(
    id: string,
    ownerId: string,
    name: string,
    category: string,
  ): Promise<void> {
    const playList = await this.playlistRepository.findById(id);
    if (!playList) throw NotFoundError('Playlist not found');

    playList.name = name;
    playList.category = category;

    await this.playlistRepository.update(playList);
  }
}
