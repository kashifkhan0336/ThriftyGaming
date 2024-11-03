import { IsString } from 'class-validator';

export class CreateProductDTO {
    @IsString()
    title: string;

    @IsString()
    description: string;

    @IsString()
    image: string;
}
