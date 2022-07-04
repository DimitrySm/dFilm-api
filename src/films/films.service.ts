import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/sequelize";
import sequelize, { QueryTypes } from 'sequelize';
import { PageMetaDto } from 'src/pagination/dto/page-meta.dto';
import { PageOptionsDto } from 'src/pagination/dto/page-option.dto';
import { PageDto } from 'src/pagination/dto/page.dto';
import { Film } from './films.model';

@Injectable()
export class FilmsService {}
