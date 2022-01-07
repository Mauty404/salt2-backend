import { ApiProperty } from '@nestjs/swagger';

export class AdvertResponseDto {
  @ApiProperty()
  public title: string;

  @ApiProperty()
  public price: number;

  @ApiProperty()
  public description: string;

  @ApiProperty()
  public link: string;

  @ApiProperty()
  public rate: number;

  @ApiProperty()
  public creationDate: Date;
}
