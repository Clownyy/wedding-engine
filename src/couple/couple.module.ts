import { Module } from '@nestjs/common';
import { CoupleService } from './couple.service';
import { CoupleController } from './couple.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [CoupleController],
  providers: [CoupleService],
  imports: [PrismaModule]
})
export class CoupleModule {}
