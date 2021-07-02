import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  addWelcome(message: string): string {
    return `added welcome ${message}`;
  }
}
