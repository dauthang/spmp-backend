import { Injectable } from '@nestjs/common';
import { User as UserModel, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async user(): Promise<UserModel[]> {
    const users = await this.prisma.user.findMany();
    return users;
  }

  async createUser(data: Prisma.UserCreateInput): Promise<UserModel> {
    return this.prisma.user.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<UserModel> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<UserModel> {
    return this.prisma.user.delete({
      where,
    });
  }
}
