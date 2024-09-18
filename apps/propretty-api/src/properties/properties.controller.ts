import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  create(@Body() body: Omit<Prisma.PropertyCreateInput, 'id'>) {
    return this.propertiesService.create({ data: body });
  }

  // @Get()
  // findAll() {
  //   return this.propertiesService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.propertiesService.findOne({ where: { id } });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: Prisma.PropertyUpdateInput) {
    return this.propertiesService.update({ where: { id }, data: body });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.propertiesService.remove({ where: { id } });
  }
}
