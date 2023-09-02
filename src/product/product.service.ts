import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/shared/entity';
import { Repository } from 'typeorm';
import { ProductInputRequest } from './product.response';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRes: Repository<Product>,
  ) {}

  async getListProduct(): Promise<Product[]> {
    const products = await this.productRes.find();
    return products;
  }

  async createProduct(data: ProductInputRequest): Promise<Product> {
    return this.productRes.save(data);
  }

  async updateProduct(data: ProductInputRequest): Promise<Product> {
    const detail = await this.detail(data.id);
    const dataSave = { ...detail, ...data };
    return this.productRes.save(dataSave);
  }

  async detail(id: string): Promise<Product> {
    if (id) {
      const dataDetail = this.productRes.findOne({
        where: {
          id,
        },
      });
      if (dataDetail) {
        return dataDetail;
      }
      throw new NotFoundException('Product not found');
    }
    throw new NotFoundException('Product not found');
  }

  async delete(id: string): Promise<string> {
    if (id) {
      this.productRes.delete(id);
      return 'Delete success';
    } else {
      throw new NotFoundException('Product not found');
    }
  }
}
