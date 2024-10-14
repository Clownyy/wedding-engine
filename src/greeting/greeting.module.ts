import { Module } from '@nestjs/common';
import { GreetingService } from './greeting.service';
import { GreetingController } from './greeting.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [GreetingController],
  providers: [GreetingService],
  imports: [PrismaModule]
})
export class GreetingModule {}
