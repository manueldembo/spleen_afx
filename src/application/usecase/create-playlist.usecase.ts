import { Inject, Injectable } from '@nestjs/common';
import { Playlist } from 'src/domain/entities/playlist';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';
import { BadRequestError } from '../helpers/http.helper';

@Injectable()
export class CreatePlaylistUsecase {
  constructor(
    @Inject('PlaylistRepository')
    private readonly playlistRepository: PlaylistRepository,
  ) {}

  async execute(
    name: string,
    category: string,
    ownerId: string,
  ): Promise<void> {
    const playlist = new Playlist(null, name, category, ownerId);

    const playlists = await this.playlistRepository.findAll();

    const playlistAlreadyExists = playlists.some(
      (p) =>
        p.name === name && p.ownerId === ownerId && p.category === category,
    );
    if (playlistAlreadyExists) throw BadRequestError('Playlist already exists');

    await this.playlistRepository.save(playlist);
  }
}
