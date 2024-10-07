import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from './login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginResponseDto } from './login-response.dto';
import { jwtConstants } from './constants';
import { compareHash } from 'src/helper/helper';

@Injectable()
export class AuthService {
    constructor(private userService: UsersService, private jwt: JwtService) { }

    async login(loginDto: LoginDto) {
        const user = await this.userService.findOneByLogin(loginDto.username)
        if (user == null) {
            throw new BadRequestException('Invalid Login')
        }
        if (!compareHash(loginDto.password, user.password)) {
            throw new BadRequestException('Invalid Password')
        }

        const payload = {
            id: user.id,
            sub: user.login,
            email: user.email
        }

        const options = {
            secret: jwtConstants.secret,
            expiresIn: '24h'
        }

        var res = new LoginResponseDto();
        res.id_token = await this.jwt.signAsync(payload, options);

        return res;
    }
}
