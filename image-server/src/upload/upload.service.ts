import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs';
import { join } from 'path';
import { cwd } from 'process';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UploadService {
  constructor(private readonly prismaService: PrismaService) { }

  async uploadFile(fileName: string, fileBuffer: Buffer) {
    const url = this.saveToDisk(fileName, fileBuffer)

    return this.prismaService.images.create({ data: { url } })
  }
  saveToDisk(fileName: string, fileBuffer: Buffer) {
    const newName = `${Date.now()}${fileName}`
    try {
      const path = `public/${newName}`
      writeFile(join(cwd(), path), fileBuffer, (err) => {
        if (err) throw err
        console.log(`file: ${newName} saved`);
      })
      return `http://www.trabalho.local:3000/${newName}`
    } catch (error) {
    }
  }
}
