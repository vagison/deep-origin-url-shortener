import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { SlugService } from './slug.service';
import { RawUrlDto } from './dto/raw-url.dto';

@Controller('slug')
export class SlugController {
  constructor(private readonly slugService: SlugService) {}

  @Post()
  create(@Body() rawUrl: RawUrlDto) {
    return this.slugService.create(rawUrl);
  }

  @Get(':slug')
  getSlug(@Param('slug') slug: string) {
    return this.slugService.getUrl(slug);
  }
}
