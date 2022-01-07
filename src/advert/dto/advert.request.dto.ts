import { ApiProperty } from '@nestjs/swagger';

export class AdvertRequestDto {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public price: number;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public link: string;
}
