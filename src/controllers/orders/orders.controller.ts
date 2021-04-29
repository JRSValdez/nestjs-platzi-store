import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  //GETs
  @Get()
  getOrders() {
    return { data: ['123213', 'asda123', '1233sfasf'] };
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
