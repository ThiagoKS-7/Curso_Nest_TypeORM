import { IsString,IsNumber } from "class-validator";
export class Course {
    @IsNumber()
    readonly id?: number;

    @IsString()
    readonly name?: string;

    @IsString()
    readonly description?: string;

    @IsString()
    readonly tags?: string[];
}