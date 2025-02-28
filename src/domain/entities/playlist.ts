import { randomUUID } from 'crypto';

export class Playlist {
  id: string;
  name: string;
  category: string;
  ownerId: string;
  songs: string[];

  constructor(
    id: string | null,
    name: string,
    description: string,
    userId: string,
    songs?: string[],
  ) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.category = description;
    this.ownerId = userId;
    this.songs = songs || [];
  }
}
