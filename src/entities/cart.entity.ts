/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { CartProduct } from './cart-product.entity';

@Entity()
export class Cart {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  totalValue: number;

  @Column()
  userId: number;

  @Column()
  creationDate: Date;

  @Column()
  expirationDate: Date;

  @OneToMany(() => CartProduct, (cartProduct) => cartProduct.cart)
  @JoinColumn()
  cartProducts: CartProduct[];
}
