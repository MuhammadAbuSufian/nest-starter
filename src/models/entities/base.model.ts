import { Column, ObjectID, ObjectIdColumn } from 'typeorm';

export abstract class BaseModel {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  active: boolean;
  @Column()
  createdAt: Date;
  @Column()
  createdBy: string;
  @Column()
  updatedAt: Date;
  @Column()
  updatedBy: string;
  @Column()
  deletedAt: Date;
  @Column()
  deletedBy: string;
}