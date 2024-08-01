import { Injectable } from '@nestjs/common';

// Um serviço básico com um único método.
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
