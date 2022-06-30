import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Films')
@Controller('films')
export class FilmsController {}
