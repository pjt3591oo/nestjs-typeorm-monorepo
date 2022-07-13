import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Photo } from '@app/entity';


@Controller()
export class AppController {
  constructor(    
    private readonly appService: AppService
  ) {}

  @Get()
  getHello(): Promise<Photo[]> {
    return this.appService.getPhotos();
  }

  @Post()
  createPhoto(@Body() photo: Photo): Promise<Photo> {
    return this.appService.createPhoto(photo);
  }
}

