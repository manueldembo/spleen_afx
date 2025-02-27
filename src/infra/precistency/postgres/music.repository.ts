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
}
