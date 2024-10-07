import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './login-response.dto';
import { LoginDto } from './login.dto';
import { CurrentUser, Public } from './decorate';

@Controller('auth')
@Public()
@ApiTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    @ApiOkResponse({ type: LoginResponseDto })
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
