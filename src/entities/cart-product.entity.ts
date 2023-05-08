/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Cart } from './cart.entity';
import { Product } from './product.entity';

@Entity()
export class CartProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quantity: number;

  @Column()
  inclusionDate: Date;

  @Column()
  totalValue: number;

  @Column()
  unitValue: number;

  @ManyToOne(() => Cart, (cart) => cart.cartProducts)
  cart: Cart;

  @ManyToOne(() => Product, (product) => product.cartProducts, { nullable: true })
  product: Product;
}
