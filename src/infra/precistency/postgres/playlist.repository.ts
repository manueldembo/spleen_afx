import { Playlist } from 'src/domain/entities/playlist';
import { PlaylistRepository } from 'src/domain/repositores/playlist-repository.interface';
import { prismaClient } from '../prisma.client';

export class PlaylistRepositoryPostgres implements PlaylistRepository {
  async save(playlist: Playlist): Promise<void> {
    await prismaClient.playlist.create({
      data: {
        id: playlist.id,
        name: playlist.name,
        category: playlist.category,
        ownerId: playlist.ownerId,
      },
    });
  }

  async findAll(): Promise<Playlist[]> {
    const playlists = await prismaClient.playlist.findMany();
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
    await prismaClient.playlist.delete({
      where: {
        id: playlistId,
      },
    });
  }

  async findById(playlistId: string): Promise<Playlist | undefined> {
    const playlist = await prismaClient.playlist.findUnique({
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
    await prismaClient.playlist.update({
      where: {
        id: playlist.id,
      },
      data: {
        name: playlist.name,
        category: playlist.category,
      },
    });
  }

  async addMusic(playlistId: string, musicId: string): Promise<void> {
    await prismaClient.playlistMusic.create({
      data: {
        playlistId,
        musicId,
      },
    });
  }
}
