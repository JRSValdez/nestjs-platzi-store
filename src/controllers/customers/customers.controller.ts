import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  Put,
} from '@nestjs/common';

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

  //PUT
  @Put(':id')
  update(@Body() body: any) {
    return {
      success: true,
      customer: body,
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
