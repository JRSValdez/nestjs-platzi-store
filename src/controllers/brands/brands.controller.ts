import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  //GETs
  @Get()
  getBrands() {
    return ['Bran 1', 'Bran 2', 'Brand 3'];
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
