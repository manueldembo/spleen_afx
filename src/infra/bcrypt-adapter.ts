import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';
import { Encrypter } from 'src/application/ports/encrypter.interface';

@Injectable()
export class BcryptAdapter implements Encrypter {
  async encrypt(value: string, salt: number): Promise<string> {
    const valueHashed = await hash(value, salt);
    return valueHashed;
  }

  async compare(value: string, hashedValue: string): Promise<boolean> {
    return compare(value, hashedValue);
  }
}
