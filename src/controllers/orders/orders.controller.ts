import { Controller, Get } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getOrders() {
    return { data: ['123213', 'asda123', '1233sfasf'] };
  }
}
