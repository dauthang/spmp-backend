import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User as UserModel } from '@prisma/client';
import { UserCreateInputRequest } from './user.response';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  async getPostById(): Promise<UserModel[]> {
    return this.userService.user();
  }

  @Post('user')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async signupUser(
    @Body() userData: UserCreateInputRequest,
  ): Promise<UserModel> {
    return this.userService.createUser(userData);
  }
}
