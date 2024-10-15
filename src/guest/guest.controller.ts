import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GuestService } from './guest.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GuestEntity } from './entities/guest.entity';
import { CreateBulkGuestDto } from './dto/create-bulk-guest.dto';

@Controller('api')
@ApiBearerAuth()
@ApiTags("guests")
export class GuestController {
  constructor(private readonly guestService: GuestService) { }

  @Post('/guests')
  @ApiCreatedResponse({ type: GuestEntity })
  create(@Body() createGuestDto: CreateGuestDto) {
    return this.guestService.create(createGuestDto);
  }

  @Post('/guests/bulk')
  @ApiCreatedResponse({ example: { count: 0 } })
  createBulk(@Body() createBulkGuestDto: CreateBulkGuestDto) {
    console.log(createBulkGuestDto);
    return this.guestService.createBulk(createBulkGuestDto);
  }

  @Get('/guests')
  @ApiOkResponse({ type: GuestEntity, isArray: true })
  findAll() {
    return this.guestService.findAll();
  }

  @Get('/guests/:id')
  @ApiOkResponse({ type: GuestEntity })
  findOne(@Param('id') id: number) {
    return this.guestService.findOne(+id);
  }

  @Patch('/guests/:id')
  @ApiOkResponse({ type: GuestEntity })
  update(@Param('id') id: number, @Body() updateGuestDto: UpdateGuestDto) {
    return this.guestService.update(+id, updateGuestDto);
  }

  @Delete('/guests/:id')
  @ApiOkResponse({ type: GuestEntity })
  remove(@Param('id') id: number) {
    return this.guestService.remove(+id);
  }

  @Get('/guests/get-by-user/:userId')
  @ApiOkResponse({ type: GuestEntity })
  findByUser(@Param('userId') userId: number) {
    return this.guestService.findByUser(+userId)
  }
}
