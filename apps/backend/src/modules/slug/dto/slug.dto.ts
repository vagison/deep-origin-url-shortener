export class SlugDto {
  code: string;
  url: string;
}

export class CreatedSlugResponseDto {
  message: string;
  slug: SlugDto;
}
