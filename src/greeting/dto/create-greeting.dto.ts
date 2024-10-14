import { ApiProperty } from "@nestjs/swagger";

export class CreateGreetingDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    greeting: string;

    @ApiProperty()
    attendanceConfirmation: boolean;

    @ApiProperty()
    userId: number;
}
