import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/shared/entity';
import { Repository } from 'typeorm';
import { ProductInputRequest } from './product.response';
import { ProductService } from './product.service';

@Controller('product')
@ApiTags('Product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async getListProduct(): Promise<Product[]> {
    return this.productService.getListProduct();
  }

  @Post('create')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async createProduct(@Body() data: ProductInputRequest): Promise<Product> {
    return this.productService.createProduct(data);
  }

  @Post('update')
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async updateProduct(@Body() data: ProductInputRequest): Promise<Product> {
    return this.productService.updateProduct(data);
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Product> {
    return this.productService.detail(id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<string> {
    return this.productService.delete(id);
  }
}
