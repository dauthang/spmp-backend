import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

@Entity()
export class Product extends AbstractEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @Column()
  public src_img_remove_bg: string;

  @Column()
  public name_product: string;

  @Column()
  public src_img: string;

  @Column()
  public ingredient: string;

  @Column()
  public uses: string;

  @Column()
  public dosage: string;

  @Column({ nullable: true })
  deleted_at?: Date;
}
