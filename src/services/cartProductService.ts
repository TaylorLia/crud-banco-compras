/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartProduct } from '../entities/cart-product.entity';

@Injectable()
export class CartProductService {
  constructor(
    @InjectRepository(CartProduct)
    private readonly CartProductRepository: Repository<CartProduct>,
  ) {}

  async findByCartId(): Promise<CartProduct[]> {
    return await this.CartProductRepository.find({
      relations: ['product']
    });
  }

  async create(CartProduct: CartProduct): Promise<CartProduct> {
    return await this.CartProductRepository.save(CartProduct);
  }

  async update(id: number, CartProduct: CartProduct): Promise<CartProduct> {
    const existingCartProduct = await this.CartProductRepository.findOneBy({id: id});
    if (existingCartProduct) {
      return await this.CartProductRepository.save({
        ...existingCartProduct,
        ...CartProduct,
      });
    }
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.CartProductRepository.delete(id);
  }
}
