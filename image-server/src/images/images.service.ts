import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { unlinkSync } from 'fs'
import { join } from 'path';
import { cwd } from 'process';

@Injectable()
export class ImagesService {
  constructor(private readonly prismaService: PrismaService) { }

  getAll() {
    return this.prismaService.imagens.findMany()
  }

  async excludeOne(id: number) {
    if (!(await this.prismaService.imagens.findFirst({ where: { id } }))) {
      return
    }
    try {

      const data = await this.prismaService.imagens.delete({
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
