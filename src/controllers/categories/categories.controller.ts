import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  //GETs
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

  //POSTs
  @Post()
  create(@Body() body: any) {
    return {
      success: true,
      category: body,
    };
  }

  //PUT
  @Put(':id')
  update(@Body() body: any) {
    return {
      success: true,
      product: body,
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
