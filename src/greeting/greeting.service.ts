import { Injectable } from '@nestjs/common';
import { CreateGreetingDto } from './dto/create-greeting.dto';
import { UpdateGreetingDto } from './dto/update-greeting.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GreetingService {
  constructor(private prisma: PrismaService) { }
  create(createGreetingDto: CreateGreetingDto) {
    return this.prisma.greeting.create({ data: createGreetingDto });
  }

  findAll() {
    return this.prisma.greeting.findMany();
  }

  findOne(id: number) {
    return this.prisma.greeting.findUnique({ where: { id } });
  }

  update(id: number, updateGreetingDto: UpdateGreetingDto) {
    return this.prisma.greeting.update({
      where: { id },
      data: updateGreetingDto
    });
  }

  remove(id: number) {
    return this.prisma.greeting.delete({ where: { id } });
  }

  findAllByUserId(userId: number) {
    return this.prisma.greeting.findMany({ where: { userId: userId } })
  }
}
