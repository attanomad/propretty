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
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertiesService } from './properties.service';

@Controller('properties')
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  create(
    @Body()
    body: CreatePropertyDto,
  ) {
    let type: Prisma.PropertyTypeCreateNestedOneWithoutPropertyInput;

    if ('id' in body.type && body.type.id) {
      type = { connect: { id: body.type.id } };
    } else if ('name' in body.type && body.type.name) {
      type = {
        create: { name: body.type.name, description: body.type.description },
      };
    }

    return this.propertiesService.create({
      data: { ...body, type },
      include: { type: true },
    });
  }

  @Get()
  find() {
    return this.propertiesService.find({
      omit: { typeId: true },
      include: { type: true },
    });
  }

  // @Get()
  // find(@Param('where') where: Prisma.PropertyWhereInput) {
  //   return this.propertiesService.find({ where });
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
