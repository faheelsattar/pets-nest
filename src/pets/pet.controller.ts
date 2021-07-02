import { Controller, Get, Post, Body, Res, Put, Param } from '@nestjs/common';
import { CreatePetDto } from './createpet.dto';
import { PetService } from './pet.service';
import { Response } from 'express';

@Controller()
export class PetController {
  constructor(private readonly petService: PetService) {}
  @Get('/pets')
  async getPets(@Res() res: Response) {
    return await this.petService.getPets();
  }

  @Post('/add-pets')
  async addPet(@Body() createPetDto: CreatePetDto) {
    return await this.petService.addPet(createPetDto);
  }

  @Put('/update-pets/:id')
  async updatePet(
    @Param('id') petId: string,
    @Body() createPetDto: CreatePetDto,
    res: Response,
  ) {
    return await this.petService.updatePet(petId, createPetDto);
  }
}
