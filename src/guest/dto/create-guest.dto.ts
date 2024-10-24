import { ApiProperty } from "@nestjs/swagger";

export class CreateGuestDto {
    @ApiProperty()
    guestName: string;

    @ApiProperty()
    phoneNumber: string;

    @ApiProperty()
    coupleId: number;
}
