import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  //GETS
  @Get()
  getProducts(@Query('limit') limit = 100, @Query('offset') offset = 0) {
    return {
      message: `limit ${limit} offset ${offset}`,
      data: this.productService.findAll(),
    };
  }

  //rutas staticas van primero, depues las dinamicas
  //para evitar conflictos
  @Get('static')
  getProductStatic() {
    return { message: 'Soy una ruta statica' };
  }

  @Get(':id')
  getProduct(@Param('id') id: number) {
    return this.productService.findOne(+id);
  }

  //POSTs
  @Post()
  create(@Body() body: any) {
    return this.productService.create(body);
  }

  //PUT
  @Put(':id')
  update(@Param('id') id: number, @Body() body: any) {
    return this.productService.update(+id, body);
  }

  //DELETE
  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.productService.delete(+id);
  }
}
