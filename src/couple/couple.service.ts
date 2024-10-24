import { Injectable } from '@nestjs/common';
import { CreateCoupleDto } from './dto/create-couple.dto';
import { UpdateCoupleDto } from './dto/update-couple.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CoupleService {
  constructor(private prisma: PrismaService) { }

  create(createCoupleDto: CreateCoupleDto) {
    return this.prisma.couple.create({ data: createCoupleDto });
  }

  findAll() {
    return this.prisma.couple.findMany();
  }

  findOne(id: number) {
    return this.prisma.couple.findUnique({ where: { id } });
  }

  update(id: number, updateCoupleDto: UpdateCoupleDto) {
    return this.prisma.couple.update({ where: { id }, data: updateCoupleDto });
  }

  remove(id: number) {
    return this.prisma.couple.delete({ where: { id } });
  }
}
