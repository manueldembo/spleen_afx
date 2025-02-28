import { Module } from '@nestjs/common';
import { PlaylistController } from './playlist.controller';
import { CreatePlaylistUsecase } from 'src/application/usecase/create-playlist.usecase';
import { PlaylistRepositoryPostgres } from '../precistency/postgres/playlist.repository';
import { JWTGuard } from '../jwt.guard';
import { DeletePlaylistUseCase } from 'src/application/usecase/delte-playlist.usecase';
import { UpdatePlaylistUseCase } from 'src/application/usecase/update-playlist.usecase';
import { AddMusicUseCase } from 'src/application/usecase/add-music.usecase';
import { MusicRepositoryPostgres } from '../precistency/postgres/music.repository';

@Module({
  controllers: [PlaylistController],
  providers: [
    CreatePlaylistUsecase,
    DeletePlaylistUseCase,
    UpdatePlaylistUseCase,
    AddMusicUseCase,
    {
      provide: 'PlaylistRepository',
      useClass: PlaylistRepositoryPostgres,
    },
    {
      provide: 'MusicRepository',
      useClass: MusicRepositoryPostgres,
    },
    JWTGuard,
  ],
})
export class PlaylistModule {}
