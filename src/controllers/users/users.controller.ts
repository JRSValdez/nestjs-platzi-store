import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('users')
export class UsersController {
  //GETs
  @Get()
  getUsers() {
    return { data: ['U1', 'U2', 'U3'] };
  }

  //POSTs
  @Post()
  create(@Body() body: any) {
    return {
      success: true,
      product: body,
    };
  }
}
