import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { JwtPayload } from 'src/auth/jwt.payload';
import { User } from 'src/user/user.decorator';
import { CreatePropertyDto } from './dto/create-property.dto';
import { PropertiesService } from './properties.service';

@Controller('properties')
@UseGuards(JwtAuthGuard)
export class PropertiesController {
  constructor(private readonly propertiesService: PropertiesService) {}

  @Post()
  create(
    @User() user: JwtPayload,
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
      data: {
        ...body,
        type,
        user: { connect: { id: user.userId } },
      },
      include: { type: true },
    });
  }

  @Get()
  // @Roles(Role.Admin)
  find() {
    return this.propertiesService.find({
      omit: { typeId: true },
      include: { type: true },
    });
  }

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
