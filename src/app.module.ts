import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AnimeController } from './anime/anime.controller';
import { AnimeService } from './anime/anime.service';

@Module({
  imports: [HttpModule],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AppModule {}
