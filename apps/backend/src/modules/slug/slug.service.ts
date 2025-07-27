import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slug } from './slug.entity';
import { RawUrlDto } from './dto/raw-url.dto';
import { encode, decode, padWithZeros } from '../../utils/slug.util';
import { ConfigService } from '@nestjs/config';
import { getAppConfig } from 'src/configs/app.config';
import { errorMessages, responseMessages } from 'src/constants';
import { CreatedSlugResponseDto, SlugDto } from './dto/slug.dto';

@Injectable()
export class SlugService {
  constructor(
    @InjectRepository(Slug)
    private slugRepo: Repository<Slug>,
    private configService: ConfigService,
  ) {}

  async create(data: RawUrlDto) {
    const entity = this.slugRepo.create(data);
    const savedSlug = await this.slugRepo.save(entity);

    const slugCode = padWithZeros(encode(savedSlug.id));
    const { appUrl } = getAppConfig(this.configService);

    const slug: SlugDto = {
      code: slugCode,
      url: `${appUrl}/${slugCode}`,
    };

    const result: CreatedSlugResponseDto = {
      message: responseMessages.Slug.SuccessfullyCreated,
      slug,
    };

    return result;
  }

  async getUrl(slugCode: string): Promise<RawUrlDto> {
    const id = decode(slugCode);
    const entity = await this.slugRepo.findOne({ where: { id } });

    if (!entity) {
      throw new NotFoundException(errorMessages.Slug.SlugNotFound);
    }

    const result: RawUrlDto = {
      url: entity.url,
    };

    return result;
  }
}
