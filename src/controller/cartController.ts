/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Put, Post, Render } from '@nestjs/common';
import { CartService } from '../services/cartService';
import { Cart } from 'src/entities/cart.entity';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post()
  async create(@Body() { userId, }: { userId: number; }): Promise<Cart> {
    return this.cartService.create({ userId, });
  }

  @Get()
  @Render('cart/list')
  async findAll(): Promise<{ carts: Cart[] }> {
    const carts = await this.cartService.findAll();
    return { carts };
  }

  @Get(':id')
  @Render('cart/detail')
  async findOne(@Param('id') id: number): Promise<{ cart: Cart }> {
    const cart = await this.cartService.findOne(id);
    return { cart };
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() { }): Promise<Cart> {
    return this.cartService.update(id,);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.cartService.remove(id);
  }
}
