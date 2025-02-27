export interface Encrypter {
  encrypt(value: string, salt: number): Promise<string>;
  compare(value: string, hashedValue: string): Promise<boolean>;
}
