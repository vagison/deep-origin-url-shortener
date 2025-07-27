// src/slug/slug.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SlugController } from './slug.controller';
import { SlugService } from './slug.service';
import { Slug } from './slug.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Slug])],
  controllers: [SlugController],
  providers: [SlugService],
})
export class SlugModule {}
