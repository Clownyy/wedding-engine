import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CoupleService } from './couple.service';
import { CreateCoupleDto } from './dto/create-couple.dto';
import { UpdateCoupleDto } from './dto/update-couple.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CoupleEntity } from './entities/couple.entity';

@Controller('api')
@ApiBearerAuth()
@ApiTags('couples')
export class CoupleController {
  constructor(private readonly coupleService: CoupleService) {}

  @Post('/couples')
  @ApiCreatedResponse({ type: CoupleEntity })
  create(@Body() createCoupleDto: CreateCoupleDto) {
    return this.coupleService.create(createCoupleDto);
  }

  @Get('/couples')
  @ApiOkResponse({ type: CoupleEntity , isArray: true})
  findAll() {
    return this.coupleService.findAll();
  }

  @Get('/couples/:id')
  @ApiOkResponse({ type: CoupleEntity })
  findOne(@Param('id') id: number) {
    return this.coupleService.findOne(+id);
  }

  @Patch('/couples/:id')
  @ApiOkResponse({ type: CoupleEntity })
  update(@Param('id') id: number, @Body() updateCoupleDto: UpdateCoupleDto) {
    return this.coupleService.update(+id, updateCoupleDto);
  }

  @Delete('/couples/:id')
  @ApiOkResponse({ type: CoupleEntity })
  remove(@Param('id') id: number) {
    return this.coupleService.remove(+id);
  }
}
