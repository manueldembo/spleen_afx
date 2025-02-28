import { IsNotEmpty, IsString } from 'class-validator';

export class PlaylistDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}

export class AddMusicDTO {
  @IsNotEmpty()
  @IsString()
  playlistId: string;

  @IsNotEmpty()
  @IsString()
  musicId: string;
}
