import { Controller, Get, Query, Redirect } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('google-auth')
  @Redirect()
  async googleAuth(): Promise<{ url: string }> {
    return this.appService.googleAuth();
  }

  @Get('google-callback')
  @Redirect()
  async googleAuthCallback(@Query('code') code: string) {
    const data = await this.appService.getAuthClientData(code);

    // Формуємо посилання на фронтенд із токеном
    const frontendUrl = process.env.REDIRECT_TO_LOGIN || 'http://localhost:3000/auth-success';
    const urlWithToken = `${frontendUrl}?token=${data.apiToken}`;

    return { url: urlWithToken };
  }
}
