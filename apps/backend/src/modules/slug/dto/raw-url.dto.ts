import { IsUrl } from 'class-validator';
import { errorMessages } from 'src/constants';

export class RawUrlDto {
  @IsUrl({}, { message: errorMessages.URL.InvalidURL })
  url: string;
}
