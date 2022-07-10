import { entityModule, Photo } from '@app/entity';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { PhotoController } from './photo.controller';
import { PhotoService } from './photo.service';

@Module({
  imports: [entityModule],
  controllers: [PhotoController],
  providers: [
    PhotoService,
    {
      provide: 'PHOTO_REPOSITORY',
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
      inject: ['DATA_SOURCE'],
    },
  ],
})
export class PhotoModule {}
