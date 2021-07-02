import * as mongoose from 'mongoose';

export const PetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
});
