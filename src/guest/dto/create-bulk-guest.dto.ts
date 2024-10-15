import { ApiProperty } from "@nestjs/swagger";
import { CreateGuestDto } from "./create-guest.dto";

export class CreateBulkGuestDto {
    @ApiProperty({type: [CreateGuestDto]})
    requestData: CreateGuestDto[];
}