import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Advert } from './advert.entity';
import { Repository } from 'typeorm';
import { AdvertRequestDto } from './dto/advert.request.dto';
import { AdvertResponseDto } from './dto/advert.response.dto';

@Injectable()
export class AdvertService {
  constructor(
    @InjectRepository(Advert)
    private usersRepository: Repository<Advert>,
  ) {}

  async getAdverts(): Promise<Advert[]> {
    const adverts = await this.usersRepository.find();

    if (!adverts) {
      throw new NotFoundException('There is any adverts yet');
    }

    return adverts;
  }

  async getAdvert(id: string) {
    const advert = await this.usersRepository.findOne({ id: id });
    if (!advert) {
      throw new NotFoundException('This advert is not exists');
    }

    const resAdvert = new AdvertResponseDto();
    resAdvert.link = advert.link;
    resAdvert.rate = advert.rate;
    resAdvert.title = advert.title;
    resAdvert.price = advert.price;
    resAdvert.description = advert.description;
    resAdvert.creationDate = advert.creationDate;

    return resAdvert;
  }

  async postAdvert(request: AdvertRequestDto): Promise<string> {
    const advert = new Advert();
    advert.link = request.link;
    advert.description = request.description;
    advert.price = request.price;
    advert.title = request.title;

    await this.usersRepository.save(advert);
    return advert.id;
  }
}
