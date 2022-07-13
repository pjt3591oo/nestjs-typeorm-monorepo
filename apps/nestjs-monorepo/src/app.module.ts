import { entityModule, Photo } from '@app/entity';
import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [entityModule],

  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: Photo,
      useFactory: (dataSource: DataSource) => dataSource.getRepository(Photo),
      inject: ['DATA_SOURCE'],
    },
  ],
})
export class AppModule {}
