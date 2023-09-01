import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AbstractEntity, User } from './entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, AbstractEntity])],
})
export class SharedModule {}
