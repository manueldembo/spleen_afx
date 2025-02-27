import { Injectable } from '@nestjs/common';
import { PlayList } from 'src/domain/entities/playlist';
import { PlayListRepository } from 'src/domain/repositores/playlist-repository.interface';
import { BadRequestError } from '../helpers/http.helper';

@Injectable()
export class CreatePlaylistUsecase {
  constructor(private readonly playlistRepository: PlayListRepository) {}

  async execute(
    name: string,
    category: string,
    ownerId: string,
  ): Promise<void> {
    const playlist = new PlayList(null, name, category, ownerId);

    const playlists = await this.playlistRepository.findAll();

    const playlistAlreadyExists = playlists.some(
      (p) =>
        p.name === name && p.ownerId === ownerId && p.category === category,
    );
    if (playlistAlreadyExists) throw BadRequestError('Playlist already exists');

    await this.playlistRepository.create(playlist);
  }
}
