import * as mongoose from 'mongoose'
export interface CreatePetDto extends mongoose.Document{
  name: string;
  age: number;
}
