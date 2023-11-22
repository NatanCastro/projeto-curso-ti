import { Controller, Delete, Get, Param } from '@nestjs/common';
import { ImagesService } from './images.service';

@Controller('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) { }

  @Get()
  getAll() {
    return this.imagesService.getAll()
  }
  @Delete(':id')
  delete(@Param('id') id: number) {
    this.imagesService.excludeOne(+id)
  }
}
