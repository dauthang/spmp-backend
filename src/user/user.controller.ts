import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserCreateInputRequest } from './user.response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from 'src/shared/entity';
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getPostById(): Promise<User[]> {
    return this.userService.user();
  }

  @Post('create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async signupUser(@Body() userData: UserCreateInputRequest): Promise<User> {
    return this.userService.createUser(userData);
  }
}
