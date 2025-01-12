import { Controller, Get } from '@nestjs/common';
import { AnimeService } from './anime.service';

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Get('genres')
  async getGenres() {
    return await this.animeService.getGenres();
  }
}
