import { DataSource } from 'typeorm';
import { Photo } from '../entity/photo.entity';

export const entityProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'test',
        entities: [Photo],
        synchronize: true,
      });
      return dataSource.initialize();
    },
  },
];