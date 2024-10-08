import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { CONSTANTS } from 'src/constant';

@Injectable()
export class UserService {
  public users: User[] = [
    {
      username: 'user1',
      password: 'admin',
      email: 'user1@gmail.com',
      age: 30,
      role: CONSTANTS.ROLES.BUSINESS_MAN,
    },
    {
      username: 'user2',
      password: 'admin',
      email: 'user2@gmail.com',
      age: 50,
      role: CONSTANTS.ROLES.EMPLOYEE,
    },
    {
      username: 'user3',
      password: 'admin',
      email: 'user3@gmail.com',
      age: 70,
      role: CONSTANTS.ROLES.BUSINESS_MAN,
    },
  ];


  getUserByName(userName: string): User {
    return this.users.find((user) => user.username === userName);
  }
}
