import { Inject, Injectable } from '@nestjs/common';
import { Photo } from '@app/entity';
import { Repository } from 'typeorm';

@Injectable()
export class PhotoService {
  
  constructor(
    @Inject('PHOTO_REPOSITORY') 
    private photoRepository: Repository<Photo>,
  ) {}
  
  async getPhotos(): Promise<Photo[]> {
    const photos = await this.photoRepository.find();
    return photos;
  }

  async createPhoto(photo: Photo): Promise<Photo> {
    const newPhoto = await this.photoRepository.save(photo);
    return newPhoto;
  }
}
