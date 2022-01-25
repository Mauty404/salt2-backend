import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Notification } from './notification.entity';
import { Repository } from 'typeorm';
import { NotificationRequestDto } from './dto/notification.request.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Notification)
    private readonly notificationRepository: Repository<Notification>,
  ) {}

  async getNotifications(): Promise<Notification[]> {
    const noti = await this.notificationRepository.find();

    if (!noti) {
      throw new NotFoundException('There is any notification yet');
    }

    return noti;
  }

  async postNotification(request: NotificationRequestDto): Promise<string> {
    const noti = new Notification();
    noti.title = request.title;
    noti.company = request.company;
    noti.details = request.details;

    await this.notificationRepository.save(noti);
    return noti.id;
  }
}
