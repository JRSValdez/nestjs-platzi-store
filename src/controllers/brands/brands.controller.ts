import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Delete,
  Param,
} from '@nestjs/common';

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

  //PUT
  @Put(':id')
  update(@Body() body: any) {
    return {
      success: true,
      brand: body,
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
