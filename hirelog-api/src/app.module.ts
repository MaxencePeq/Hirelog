import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService, TestService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';

@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService, TestService],
})
export class AppModule {}
