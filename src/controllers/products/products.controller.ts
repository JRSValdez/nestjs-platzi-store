import { Controller, Get, Query, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  //rutas staticas van primero, depues las dinamicas
  //para evitar conflictos
  @Get('static')
  getProductStatic() {
    return 'Soy una ruta statica';
  }

  @Get(':id')
  getProduct(@Param() params: any) {
    return `Product requested ${params.id}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('productId') productId: number,
  ) {
    return `limit ${limit} offset ${offset} product ${productId}`;
  }
}
