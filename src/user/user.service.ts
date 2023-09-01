import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/shared/entity';
import { Repository } from 'typeorm';
import { UserCreateInputRequest } from './user.response';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRes: Repository<User>,
  ) {}

  async user(): Promise<User[]> {
    const users = await this.userRes.find();
    return users;
  }

  async createUser(data: UserCreateInputRequest): Promise<User> {
    return this.userRes.save(data);
  }
}
