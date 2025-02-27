import { ConsoleLogger, Module } from '@nestjs/common';
import { UserModule } from './infra/controllers/user.module';
import { APP_FILTER } from '@nestjs/core';
import { GlobalExceptionFilter } from './infra/error/global-exception.filter';

@Module({
  imports: [
    UserModule
  ],
  controllers: [],
  providers: [
    ConsoleLogger,
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    }
  ],
})
export class AppModule {}
