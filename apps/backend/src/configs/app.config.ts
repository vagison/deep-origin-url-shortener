import { ConfigService } from '@nestjs/config';

export const getAppConfig = (configService: ConfigService) => ({
  appUrl: configService.get<string>('FRONTEND_URL'),
});
