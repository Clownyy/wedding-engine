import { Injectable } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { UpdateGuestDto } from './dto/update-guest.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GuestService {
  constructor(private prismaService: PrismaService) { }

  create(createGuestDto: CreateGuestDto) {
    return this.prismaService.guest.create({ data: createGuestDto })
  }

  findAll() {
    return this.prismaService.guest.findMany();
  }

  findOne(id: number) {
    return this.prismaService.guest.findUnique({ where: { id } });
  }

  update(id: number, updateGuestDto: UpdateGuestDto) {
    return this.prismaService.guest.update({
      where: { id },
      data: updateGuestDto,
    });
  }

  remove(id: number) {
    return this.prismaService.guest.delete({ where: { id } });
  }

  findByUser(userId: number) {
    return this.prismaService.guest.findMany({ where: { userId: userId } })
  }
}