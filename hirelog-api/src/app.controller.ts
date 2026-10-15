import { Controller, Get } from '@nestjs/common';
import { TestService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly testService: TestService) {}

  @Get()
  getHello(): Promise<string> {
    return this.testService.getTest();
  }
}
