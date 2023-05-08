/* eslint-disable prettier/prettier */
import { CartDto } from "./cart.dto";
import { ProductDto } from "./product.dto";

export class CartProductDto {
  id: number;
  quantity: number;
  inclusionDate: Date;
  expirationDate: Date;
  totalValue: number;
  unitValue: number;
  product: ProductDto;
  cart: CartDto;
}
