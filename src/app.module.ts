/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/userController';
import { UserService } from './services/userService';
import { User } from './entities/user.entity';
import { ProductController } from './controller/productController';
import { ProductService } from './services/productService';
import { Product } from './entities/product.entity';
import { CartController } from './controller/cartController';
import { CartService } from './services/cartService';
import { Cart } from './entities/cart.entity';
import { CartProduct } from './entities/cart-product.entity';
import { CartProductController } from './controller/cartProductController';
import { CartProductService } from './services/cartProductService';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'SenhaDoRoot',
      database: 'compras-crud',
      entities: [User, Product, Cart, CartProduct],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([User, Product, Cart, CartProduct]),
  ],
  controllers: [
    AppController,
    UserController,
    ProductController,
    CartController,
    CartProductController,
  ],
  providers: [
    AppService,
    UserService,
    ProductService,
    CartService,
    CartProductService,
  ],
})
export class AppModule {}
