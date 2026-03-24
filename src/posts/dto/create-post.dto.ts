import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  slug?: string;

  @IsString()
  @IsOptional()
  coverImg?: string;

  @IsBoolean()
  @IsOptional()
  published?: boolean;
}
