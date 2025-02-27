import { IsNotEmpty, IsString } from 'class-validator';

export class PlaylistDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  category: string;
}
