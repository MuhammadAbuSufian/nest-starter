import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';
import { BaseModel } from './base.model';

@Entity()
export class User extends BaseModel{
  @Column()
  firstName: string;
  @Column()
  lastName: string;
}