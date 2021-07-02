import { Module } from '@nestjs/common';
import { PetController } from './pet.controller';
import { PetService } from './pet.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PetSchema } from './pets.model';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Pets',
        schema: PetSchema,
      },
    ]),
  ],
  controllers: [PetController],
  providers: [PetService],
})
export class PetModule {}
