import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new/new')
  newEndpoint() {
    return 'yo soy un nuevo metodo';
  }

  //rutas staticas van primero, depues las dinamicas
  //para evitar conflictos
  @Get('products/static')
  getProductStatic() {
    return 'Soy una ruta statica';
  }

  @Get('products/:id')
  getProduct(@Param() params: any) {
    return `Product requested ${params.id}`;
  }

  @Get('categories/:catId')
  getCategory(@Param('catId') catId: string) {
    return `Category requested ${catId}`;
  }

  @Get('categories/:catId/products/:productId')
  getProductByCategory(
    @Param('catId') catId: string,
    @Param('productId') productId: string,
  ) {
    return `Category ${catId} Product ${productId}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('productId') productId: number,
  ) {
    return `limit ${limit} offset ${offset} product ${productId}`;
  }
}
