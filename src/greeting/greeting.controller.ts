import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GreetingService } from './greeting.service';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { UpdateGreetingDto } from './dto/update-greeting.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@Controller('api')
@ApiBearerAuth()
@ApiTags("greetings")
export class GreetingController {
  constructor(private readonly greetingService: GreetingService) { }

  @Post('/greetings')
  create(@Body() createGreetingDto: CreateGreetingDto) {
    return this.greetingService.create(createGreetingDto);
  }

  @Get('/greetings')
  findAll() {
    return this.greetingService.findAll();
  }

  @Get('/greetings/:id')
  findOne(@Param('id') id: number) {
    return this.greetingService.findOne(+id);
  }

  @Patch('/greetings/:id')
  update(@Param('id') id: number, @Body() updateGreetingDto: UpdateGreetingDto) {
    return this.greetingService.update(+id, updateGreetingDto);
  }

  @Delete('/greetings/:id')
  remove(@Param('id') id: number) {
    return this.greetingService.remove(+id);
  }

  @Get('/greetings/get-by-user/:userId')
  findAllByUserId(@Param('userId') userId: number) {
    return this.greetingService.findAllByUserId(+userId);
  }
}
