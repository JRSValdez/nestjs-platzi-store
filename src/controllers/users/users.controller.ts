import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Delete,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  //GETs
  @Get()
  getUsers() {
    return { data: ['U1', 'U2', 'U3'] };
  }

  //POSTs
  @Post()
  create(@Body() body: any) {
    return {
      success: true,
      user: body,
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
