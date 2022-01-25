import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdvertModule } from './advert/advert.module';
import { Advert } from './advert/advert.entity';
import { ConfigModule } from '@nestjs/config';
import { NotificationModul } from './notification/notification.module';
import { Notification } from "./notification/notification.entity";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Advert, Notification],
      synchronize: true,
    }),
    AdvertModule,
    NotificationModul,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
