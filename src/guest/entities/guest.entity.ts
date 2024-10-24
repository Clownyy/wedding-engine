import { ApiProperty } from "@nestjs/swagger";
import { Guest } from "@prisma/client";

export class GuestEntity implements Guest{
    @ApiProperty()
    id: number;

    @ApiProperty()
    guestName: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    coupleId: number;
}
