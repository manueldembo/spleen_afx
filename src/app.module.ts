import { Module } from '@nestjs/common';
import { UserModule } from './infra/controllers/user.module';

@Module({
  imports: [
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
