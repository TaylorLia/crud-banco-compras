/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cart } from '../entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private cartRepository: Repository<Cart>,
  ) {}

  async create({ userId, }: { userId: number; }): Promise<Cart> {
    const cart = new Cart();
    cart.userId = userId;

    return this.cartRepository.save(cart);
  }

  async findAll(): Promise<Cart[]> {
    return this.cartRepository.find();
  }

  async findOne(id: number): Promise<Cart> {
    return this.cartRepository.findOneBy({id: id});
  }

  async update(id: number): Promise<Cart> {
    const cart = await this.cartRepository.findOneBy({id: id});

    return this.cartRepository.save(cart);
  }

  async remove(id: number): Promise<void> {
    await this.cartRepository.delete(id);
  }
}
