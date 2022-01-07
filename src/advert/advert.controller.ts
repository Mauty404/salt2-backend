import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AdvertService } from './advert.service';
import { AdvertRequestDto } from './dto/advert.request.dto';
import { AdvertResponseDto } from './dto/advert.response.dto';
import { Advert } from './advert.entity';

@Controller('advert')
export class AdvertController {
  constructor(private readonly advertService: AdvertService) {}

  @Get()
  async getAdverts(): Promise<Advert[]> {
    return await this.advertService.getAdverts();
  }

  @Get(':id')
  async getAdvert(@Param('id') id: string): Promise<AdvertResponseDto> {
    return await this.advertService.getAdvert(id);
  }

  @Post()
  async createAdvert(@Body() request: AdvertRequestDto): Promise<string> {
    return await this.advertService.postAdvert(request);
  }
}
