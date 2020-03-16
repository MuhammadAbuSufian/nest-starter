import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbConfigModule } from './config/db.config';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [
    DbConfigModule,
  ],
  controllers: [
    AppController,
    UserController
  ],
  providers: [
    AppService,
    UserService
  ],
})
export class AppModule {}
