import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { MailModule } from 'src/mail/mail.module';

@Module({
    imports: [UsersModule, MailModule],
    providers: [AuthService, PrismaService, UsersService, JwtService],
    controllers: [AuthController],
})
export class AuthModule { }