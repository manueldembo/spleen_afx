import { Inject, Injectable } from '@nestjs/common';
import { MusicRepository } from 'src/domain/repositores/music-repository.interface';
import { NotFoundError } from '../helpers/http.helper';

@Injectable()
export class UploadMusicUseCase {
  constructor(
    @Inject('MusicRepository')
    private readonly musicRepository: MusicRepository,
  ) {}

  async execute(file: Express.Multer.File, musicId: string): Promise<void> {
    if (!file) throw NotFoundError('File not found');

    const music = await this.musicRepository.findById(musicId);
    if (!music) throw NotFoundError('Music not found');

    music.fileUrl = `/upload/${file.filename}`;
    await this.musicRepository.update(music);
  }
}
