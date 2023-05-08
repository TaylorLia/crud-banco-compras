/* eslint-disable prettier/prettier */
export class CreateUserDto {
    name: string;
    email: string;
    username: string;
    password: string;
  }
  
  export class UpdateUserDto {
    name?: string;
    email?: string;
    username?: string;
    password?: string;
  }
  