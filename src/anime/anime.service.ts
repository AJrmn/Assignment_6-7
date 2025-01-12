import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';

@Injectable()
export class AnimeService {
  constructor(private readonly httpService: HttpService) {}

  async getGenres(): Promise<any> {
    try {
      const response: AxiosResponse = await this.httpService
        .get('https://myanimelist.p.rapidapi.com/v2/manga/genres', {
          headers: {
            'x-rapidapi-host': 'myanimelist.p.rapidapi.com',
            'x-rapidapi-key': '0907ef142dmsh096e3282aaaf007p12decdjsn39407a417e0d', // replace with your own API key
          },
        })
        .toPromise();
      return response.data;
    } catch (error) {
      throw new HttpException('Failed to fetch genres', HttpStatus.BAD_GATEWAY);
    }
  }
}
