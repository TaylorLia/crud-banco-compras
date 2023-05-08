/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ProductService } from '../services/productService';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from '../entities/product.entity';


@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Product> {
    return this.productService.findById(id);
  }

  @Post()
  async create(@Body() productDto: ProductDto): Promise<Product> {
    return this.productService.create(productDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() productDto: ProductDto): Promise<Product> {
    return this.productService.update(id, productDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.productService.delete(id);
  }
}