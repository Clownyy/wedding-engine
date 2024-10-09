import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';
import { GuestModule } from './guest/guest.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, JwtModule, MailModule, ConfigModule.forRoot({
    isGlobal: true,
  }), GuestModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthGuard,
  }],
})
export class AppModule {}
