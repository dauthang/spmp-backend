import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbstractEntity, Product, User } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, AbstractEntity, Product])],
})
export class SharedModule {}
