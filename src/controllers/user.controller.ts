import { Controller, Get } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/entities/user.model';

@Controller('/user')
export class UserController {
  constructor( private readonly usersService: UserService) {}

  @Get()
  get() {
    return this.usersService.findAll();
  }
}