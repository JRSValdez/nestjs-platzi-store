import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

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

  //PUT
  @Put(':id')
  update(@Body() body: any) {
    return {
      success: true,
      order: body,
    };
  }

  //DELETE
  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      success: true,
      data: id,
    };
  }
}
