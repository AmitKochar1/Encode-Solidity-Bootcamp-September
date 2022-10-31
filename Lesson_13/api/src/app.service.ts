import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! I am hungry! <br> Hello hungry, I am World!';
  }
}
