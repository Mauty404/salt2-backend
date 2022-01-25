import { Body, Controller, Get, Post } from '@nestjs/common';
import { Notification } from './notification.entity';
import { NotificationService } from './notification.service';
import { NotificationRequestDto } from './dto/notification.request.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  async getNotifications(): Promise<Notification[]> {
    return await this.notificationService.getNotifications();
  }

  @Post()
  async postNotification(
    @Body() request: NotificationRequestDto,
  ): Promise<string> {
    return await this.notificationService.postNotification(request);
  }
}
