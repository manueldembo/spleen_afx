import { Inject } from '@nestjs/common';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';

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
    await this.playlistRepository.update(id, ownerId, name, category);
  }
}
