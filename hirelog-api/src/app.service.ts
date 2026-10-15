import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class TestService {
  constructor(private readonly prisma: PrismaService) {}

  async getTest(): Promise<string> {
    const NbUser = await this.prisma.user.count();
    return 'En bdd, il y a : ' + NbUser + ' utilisateurs';
  }
}
