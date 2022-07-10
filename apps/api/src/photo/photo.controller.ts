import { Controller, Get, Post } from '@nestjs/common';
import { Photo } from '@app/entity';
// import { ApiService } from './api.service';
import { PhotoService } from './photo.service';

@Controller('photo')
export class PhotoController {
  constructor(
    private readonly photoService: PhotoService
  ) {}

  @Get()
  getHello(): Promise<Photo[]> {
    return this.photoService.getPhotos();
  }

  @Post()
  createPhoto(photo: Photo): Promise<Photo> {
    return this.photoService.createPhoto(photo);
  }
}
