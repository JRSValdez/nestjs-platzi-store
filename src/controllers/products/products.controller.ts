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
import { CustomParseIntPipe } from 'src/common/custom-parse-int.pipe';
import { CreateProductDTO, UpdateProductDTO } from 'src/dtos/products.dtos';
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
  getProduct(@Param('id', CustomParseIntPipe) id: number) {
    return this.productService.findOne(id);
  }

  //POSTs
  @Post()
  create(@Body() body: CreateProductDTO) {
    return this.productService.create(body);
  }

  //PUT
  @Put(':id')
  update(
    @Param('id', CustomParseIntPipe) id: number,
    @Body() body: UpdateProductDTO,
  ) {
    return this.productService.update(id, body);
  }

  //DELETE
  @Delete(':id')
  delete(@Param('id', CustomParseIntPipe) id: number) {
    return this.productService.delete(id);
  }
}
