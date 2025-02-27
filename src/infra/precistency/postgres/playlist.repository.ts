import { Playlist } from 'src/domain/entities/playlist';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';
import { prismaClient } from '../prisma.client';

export class PlaylistRepositoryPostgres implements PlaylistRepository {
  async save(playlist: Playlist): Promise<void> {
    await prismaClient.playList.create({
      data: {
        id: playlist.id,
        name: playlist.name,
        category: playlist.category,
        ownerId: playlist.ownerId,
        songs: [],
      },
    });
  }

  async findAll(): Promise<Playlist[]> {
    const playlists = await prismaClient.playList.findMany();
    return playlists.map((playlist) => {
      return new Playlist(
        playlist.id,
        playlist.name,
        playlist.category,
        playlist.ownerId,
      );
    });
  }
}
