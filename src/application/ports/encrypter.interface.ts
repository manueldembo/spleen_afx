export interface Encrypter {
    encrypt(value: string, salt: number): Promise<string>
}