import { Music } from 'src/domain/entities/music';
import {
  Filter,
  MusicRepository,
} from 'src/domain/repositores/music-repository.interface';
import { prismaClient } from '../prisma.client';

export class MusicRepositoryPostgres implements MusicRepository {
  async search(filters: Filter): Promise<Music[]> {
    const result = await prismaClient.music.findMany({
      where: {
        fullText: {
          contains: filters.query,
          mode: 'insensitive',
        },
        AND: {
          fullText: {
            contains: filters.artist,
            mode: 'insensitive',
          },
          AND: {
            fullText: {
              contains: filters.genre,
              mode: 'insensitive',
            },
          },
        },
      },
    });

    return result.map(
      (r) =>
        new Music(
          r.id,
          r.title,
          r.artist,
          r.genre,
          r.releaseYear,
          r.popularity,
        ),
    );
  }

  async findById(id: string): Promise<Music | undefined> {
    const music = await prismaClient.music.findUnique({
      where: {
        id,
      },
    });

    if (!music) return undefined;

    return new Music(
      music.id,
      music.title,
      music.artist,
      music.genre,
      music.releaseYear,
      music.popularity,
      music.fileUrl || undefined,
    );
  }

  async update(musc: Music): Promise<void> {
    await prismaClient.music.update({
      where: {
        id: musc.id,
      },
      data: {
        fileUrl: musc.fileUrl,
      },
    });
  }
}
