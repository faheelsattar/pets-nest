import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateMessageBody } from './dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  addWelcome(@Body() createMessageBody: CreateMessageBody): string {
    return this.appService.addWelcome(createMessageBody.welcome);
  }
}
