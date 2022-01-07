import { Module } from '@nestjs/common';
import { AdvertController } from './advert.controller';
import { AdvertService } from './advert.service';
import { Advert } from './advert.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Advert])],
  controllers: [AdvertController],
  providers: [AdvertService],
})
export class AdvertModule {}
