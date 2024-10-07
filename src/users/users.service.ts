import { Injectable, Logger } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { encrypt, randString } from 'src/helper/helper';

@Injectable()
export class UsersService {
	private readonly logger = new Logger(UsersService.name)

	constructor(private prisma: PrismaService) { }

	create(createUserDto: CreateUserDto) {
		const randPass = randString(8);
		createUserDto.password = encrypt(randPass);
		this.logger.log('Password: ' + randPass);
		return this.prisma.user.create({ data: createUserDto })
	}

	findAll() {
		return this.prisma.user.findMany();
	}

	findOne(id: number) {
		return this.prisma.user.findUnique({ where: { id } })
	}

	findOneByEmail(email: string) {
		return this.prisma.user.findUnique({ where: { email } })
	}

	findOneByLogin(login: string) {
		return this.prisma.user.findUnique({ where: { login } })
	}

	update(id: number, updateUserDto: UpdateUserDto) {
		updateUserDto.password = encrypt(updateUserDto.password);
		return this.prisma.user.update({
			where: { id },
			data: updateUserDto,
		});
	}

	remove(id: number) {
		return this.prisma.user.delete({ where: { id } });
	}
}
