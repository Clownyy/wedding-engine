import { ApiProperty } from "@nestjs/swagger";

export class CreateCoupleDto {
    @ApiProperty()
    coupleName1: string;

    @ApiProperty()
    coupleDesc1: string;

    @ApiProperty()
    coupleName2: string;

    @ApiProperty()
    coupleDesc2: string;
}
