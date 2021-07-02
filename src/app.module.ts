import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pets/pet.module';
import { MongooseModule } from '@nestjs/mongoose';
import dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    PetModule,
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@cluster0.w43zq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
