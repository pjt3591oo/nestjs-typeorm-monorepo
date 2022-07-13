import { Injectable, Inject } from '@nestjs/common';
import { Photo } from '@app/entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @Inject(Photo) 
    private photoRepository: Repository<Photo>,
  ) {}

  async getPhotos(): Promise<Photo[]> {
    const photos = await this.photoRepository.find();
    return photos;
  }

  async createPhoto(photo: Photo): Promise<Photo> {
    console.log(photo)
    const newPhoto = await this.photoRepository.save(photo);
    return newPhoto;
  }
}
