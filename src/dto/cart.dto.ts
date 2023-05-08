/* eslint-disable prettier/prettier */
import { CartProduct } from 'src/entities/cart-product.entity';

export class CartDto {
  id: number;
  userId: number;
  creationDate: Date;
  expirationDate: Date;
  totalValue: number;
  cartProducts: CartProduct[];
}