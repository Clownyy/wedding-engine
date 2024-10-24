import { ApiProperty } from "@nestjs/swagger";
import { Couple } from "@prisma/client";

export class CoupleEntity implements Couple {
    @ApiProperty()
    id: number;

    @ApiProperty()
    coupleName1: string;

    @ApiProperty()
    coupleDesc1: string;

    @ApiProperty()
    coupleName2: string;

    @ApiProperty()
    coupleDesc2: string;
}
