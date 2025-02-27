import { ConsoleLogger, Module } from '@nestjs/common';
import { UserModule } from './infra/controllers/user.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { GlobalExceptionFilter } from './infra/error/global-exception.filter';
import { AuthModule } from './infra/controllers/auth.module';
import { PlaylistModule } from './infra/controllers/playlist.module';
import { JwtModule } from '@nestjs/jwt';
import { MusicModule } from './infra/controllers/music.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PlaylistModule,
    MusicModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  controllers: [],
  providers: [
    ConsoleLogger,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
