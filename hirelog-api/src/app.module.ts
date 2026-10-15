import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService, TestService } from './app.service.js';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, TestService],
})
export class AppModule {}
