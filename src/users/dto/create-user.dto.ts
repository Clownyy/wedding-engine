import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    email: string;

    password: string;

    @ApiProperty()
    login: string;

    @ApiProperty()
    firstName: string;

    @ApiProperty()
    lastName: string;

    resetKey: string;

    resetDate: Date;
}
