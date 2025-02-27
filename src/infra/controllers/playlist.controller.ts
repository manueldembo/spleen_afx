import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { CreatePlaylistDTO } from 'src/application/dto/playlist.dto';
import { CreatePlaylistUsecase } from 'src/application/usecase/create-playlist.usecase';
import { JWTGuard } from '../jwt.guard';

@Controller('playlists')
export class PlaylistController {
  constructor(private readonly createPlaylistUsecase: CreatePlaylistUsecase) {}

  @UseGuards(JWTGuard)
  @Post()
  async create(@Body() input: CreatePlaylistDTO, @Request() req) {
    const ownerId = req.user.sub;
    await this.createPlaylistUsecase.execute(
      input.name,
      input.category,
      ownerId,
    );
  }
}
