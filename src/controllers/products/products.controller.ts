import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //GETS
  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('productId') productId: number,
  ) {
    return { message: `limit ${limit} offset ${offset} product ${productId}` };
  }

  //rutas staticas van primero, depues las dinamicas
  //para evitar conflictos
  @Get('static')
  getProductStatic() {
    return { message: 'Soy una ruta statica' };
  }

  @Get(':id')
  getProduct(@Param() params: any) {
    return { message: `Product requested ${params.id}` };
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
