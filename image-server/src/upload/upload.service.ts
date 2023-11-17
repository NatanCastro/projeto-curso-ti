import { Injectable } from '@nestjs/common';
import { writeFile } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

@Injectable()
export class UploadService {
  uploadFile(fileName: string, fileBuffer: Buffer) {
    const path = `public/${fileName}`
    writeFile(join(cwd(), path), fileBuffer, (err) => {
      if (err) throw err
      console.log(`file: ${fileName} saved`);
    })
    return `www.trabalho.local:3000/${path}`
  }
}
