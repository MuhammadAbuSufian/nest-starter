import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../models/entities/user.model';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mongodb',
    host: 'localhost',
    port: 27017,
    database: 'test',
    entities: [User],
    synchronize: true,
    },),
    TypeOrmModule.forFeature([
      User
    ])
  ],
  exports: [TypeOrmModule]
})
export class DbConfigModule {
}