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

  async delete(playlistId: string): Promise<void> {
    await prismaClient.playList.delete({
      where: {
        id: playlistId,
      },
    });
  }

  async findById(playlistId: string): Promise<Playlist | undefined> {
    const playlist = await prismaClient.playList.findUnique({
      where: {
        id: playlistId,
      },
    });

    if (!playlist) return undefined;

    return new Playlist(
      playlist.id,
      playlist.name,
      playlist.category,
      playlist.ownerId,
    );
  }

  async update(playlist: Playlist): Promise<void> {
    await prismaClient.playList.update({
      where: {
        id: playlist.id,
      },
      data: {
        name: playlist.name,
        category: playlist.category,
      },
    });
  }
}
