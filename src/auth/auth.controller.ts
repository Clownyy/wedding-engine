import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiBearerAuth, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './login-response.dto';
import { LoginDto } from './login.dto';
import { CurrentUser, Public } from './decorate';
import { SetPasswordDto } from 'src/users/dto/set-password.dto';

@Controller('/api/auth')
@Public()
@ApiTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post()
    @ApiOkResponse({ type: LoginResponseDto })
    login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @Post('/set-password')
    @ApiOkResponse({ type: LoginResponseDto })
    setPassword(@Body() setPasswordDto: SetPasswordDto) {
        return this.authService.setPassword(setPasswordDto);
    }
}
