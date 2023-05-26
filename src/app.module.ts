import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from "./prisma.service";
import {CardModule} from "./card/card.module";
import {PackModule} from "./pack/pack.module";
import {UserModule} from "./user/user.module";

@Module({
  imports: [CardModule, PackModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
