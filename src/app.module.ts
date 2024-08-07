import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { UserModule } from './user/user.module';

// O módulo raiz do aplicativo.
@Module({
  imports: [UserModule],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
