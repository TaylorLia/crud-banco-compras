/* eslint-disable prettier/prettier */

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  price: number;

  @Column()
  expirationDate: Date;

  @Column()
  description: string;
    cartProducts: any;
}
