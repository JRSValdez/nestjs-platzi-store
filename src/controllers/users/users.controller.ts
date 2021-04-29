import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getUsers() {
    return { data: ['U1', 'U2', 'U3'] };
  }
}
