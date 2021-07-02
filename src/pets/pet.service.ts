import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { Pet } from './interfaces/pet.interfaces';
import { CreatePetDto } from './createpet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class PetService {
  constructor(
    @InjectModel('Pets') private readonly petsModel: Model<CreatePetDto>,
  ) {}
  private pets: Pet[] = [];

  async getPets(): Promise<Array<CreatePetDto>> {
    const pets = await this.petsModel.find().exec();
    console.log(pets);
    return pets;
  }

  async addPet(createPetDto: CreatePetDto): Promise<string> {
    // console.log(createPetDto);
    // this.pets.push(createPetDto);
    const newPet = new this.petsModel(createPetDto);
    const pet = await newPet.save();
    console.log(pet);
    return 'added pet successfully';
  }

  async updatePet(
    petId: string,
    createPetDto: CreatePetDto,
  ): Promise<CreatePetDto> {
    const pet = await this.petsModel.findById(petId).exec();
    if (createPetDto.name) {
      pet.name = createPetDto.name;
    }

    if (createPetDto.age) {
      pet.age = createPetDto.age;
    }
    pet.save();
    return pet;
  }
}
