import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  TokenPayload,
  TokenService,
} from 'src/application/ports/token-service.interface';

@Injectable()
export class JWTTokenService implements TokenService {
  constructor(private readonly jwtservice: JwtService) {}

  generateToken(payload: TokenPayload): string {
    return this.jwtservice.sign(payload);
  }
}
