export interface TokenService {
  generateToken(payload: TokenPayload): string;
}

export interface TokenPayload {
  sub: string;
}
