import { Controller } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Favourites')
@Controller('favourites')
export class FavouritesController {}
