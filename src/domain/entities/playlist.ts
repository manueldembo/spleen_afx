import { randomUUID } from 'crypto';

export class PlayList {
  id: string;
  name: string;
  category: string;
  ownerId: string;

  constructor(
    id: string | null,
    name: string,
    description: string,
    userId: string,
  ) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.category = description;
    this.ownerId = userId;
  }
}
