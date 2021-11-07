import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return `all it's fine`;
  }
}
