import { randomUUID } from 'crypto';
import { Email } from '../email';

export class User {
  id: string;
  name: string;
  email: Email;
  password: string;

  constructor(id: string | null, name: string, email: Email, password: string) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
