/* eslint-disable prettier/prettier */
import { CartProduct } from '../entities/cart-product.entity';

export class ProductDto {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  quantity: number;
  expirationDate: Date;
  cartProducts: CartProduct[];
}