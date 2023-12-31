import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UploadModule } from './upload/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PrismaModule } from './prisma/prisma.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [
    UploadModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),

    }),
    PrismaModule,
    ImagesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
