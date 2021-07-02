import { Controller, Get, Post, Body, Res, Put, Param } from '@nestjs/common';
import { CreatePetDto } from './createpet.dto';
import { PetService } from './pet.service';
import { Response } from 'express';

@Controller()
export class PetController {
  constructor(private readonly petService: PetService) {}
  @Get('/pets')
  getPets(@Res() res: Response) {
    this.petService.getPets();
  }

  @Post('/add-pets')
  addPet(@Body() createPetDto: CreatePetDto) {
    this.petService.addPet(createPetDto);
  }

  @Put('/update-pets/:id')
  updatePet(
    @Param('id') petId: string,
    @Body() createPetDto: CreatePetDto,
    res: Response,
  ) {
    this.petService.updatePet(petId, createPetDto);
  }
}
