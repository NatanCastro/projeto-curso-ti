import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { unlinkSync } from 'fs'
import { join } from 'path';
import { cwd } from 'process';

@Injectable()
export class ImagesService {
  constructor(private readonly prismaService: PrismaService) { }

  getAll() {
    return this.prismaService.images.findMany()
  }

  async excludeOne(id: number) {
    try {
      if (!(await this.prismaService.images.findFirst({ where: { id } }))) {
        return
      }
      const data = await this.prismaService.images.delete({
        where: {
          id
        }
      })
      const path = join(cwd(), 'public', data.url.split('/').at(-1))
      unlinkSync(path)
    } catch (error) {
    }
  }
}
