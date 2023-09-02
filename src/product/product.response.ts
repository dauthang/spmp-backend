import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ProductInputRequest {
  @ApiPropertyOptional()
  public id!: string;

  @ApiProperty()
  public src_img_remove_bg: string;

  @ApiProperty()
  public name_product: string;

  @ApiProperty()
  public src_img: string;

  @ApiProperty()
  public ingredient: string;

  @ApiProperty()
  public uses: string;

  @ApiProperty()
  public dosage: string;

  @ApiProperty()
  deleted_at?: Date;
}
