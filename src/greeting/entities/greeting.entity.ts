import { ApiProperty } from "@nestjs/swagger";
import { Greeting } from "@prisma/client";

export class GreetingEntity implements Greeting {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    greeting: string;

    @ApiProperty()
    attendanceConfirmation: boolean;

    @ApiProperty()
    userId: number;
}
