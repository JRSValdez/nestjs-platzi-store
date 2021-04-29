import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  //GETs
  @Get()
  getCustomers() {
    return { data: ['C1', 'C2', 'C3'] };
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
