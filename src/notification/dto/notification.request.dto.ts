import { ApiProperty } from '@nestjs/swagger';

export class NotificationRequestDto {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public company: string;

  @ApiProperty()
  public details: string;
}
