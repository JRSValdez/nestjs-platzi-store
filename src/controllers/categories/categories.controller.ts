import { Controller, Get, Param, Post, Body } from '@nestjs/common';

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
      product: body,
    };
  }
}
