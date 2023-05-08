/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CartProductService } from '../services/cartProductService';
import { CartProductDto } from '../dto/cart-product.dto';
import { CartProduct } from '../entities/cart-product.entity';

@Controller('cart-product')
export class CartProductController {
  constructor(private readonly cartProductService: CartProductService) {}

  @Get(':cartId')
  async findByCartId(): Promise<CartProduct[]> {
    return await this.cartProductService.findByCartId();
  }

  @Post()
  async create(@Body() cartProductDto: CartProductDto): Promise<CartProduct> {
    const newCartProduct = new CartProduct();
    newCartProduct.quantity = cartProductDto.quantity;
    newCartProduct.product = cartProductDto.product;
    newCartProduct.cart = cartProductDto.cart;
    return await this.cartProductService.create(newCartProduct);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() cartProductDto: CartProductDto,
  ): Promise<CartProduct> {
    const updatedCartProduct = new CartProduct();
    updatedCartProduct.quantity = cartProductDto.quantity;
    updatedCartProduct.product = cartProductDto.product;
    updatedCartProduct.cart = cartProductDto.cart;
    return await this.cartProductService.update(id, updatedCartProduct);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    await this.cartProductService.delete(id);
  }
}