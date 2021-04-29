import { Controller, Get } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return ['Bran 1', 'Bran 2', 'Brand 3'];
  }
}
