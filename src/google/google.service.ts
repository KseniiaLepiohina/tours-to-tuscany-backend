import { Injectable } from '@nestjs/common';
import { google } from 'googleapis';
import { ConfigService } from '@nestjs/config';
import { OAuth2Client } from 'google-auth-library';

@Injectable()
export class GoogleService {
  constructor(private configService: ConfigService) {}

  // Створюємо клієнт на основі змінних оточення
  private getAuthClient(): OAuth2Client {
    return new OAuth2Client(
      this.configService.get<string>('GOOGLE_CLIENT_ID'),
      this.configService.get<string>('GOOGLE_CLIENT_SECRET'),
      this.configService.get<string>('GOOGLE_REDIRECT'),
    );
  }

  async getOAuth2ClientUrl(): Promise<{ url: string }> {
    const authClient = this.getAuthClient();
    
    // Отримуємо масив скоупів (наприклад, з "email,profile" робимо ["email", "profile"])
    const scopes = this.configService.get<string>('GOOGLE_SCOPES_API')?.split(',') || ['email', 'profile'];

    const url = authClient.generateAuthUrl({
      access_type: 'offline',
      scope: scopes,
      prompt: 'consent',
      include_granted_scopes: true,
    });

    return { url };
  }

  async getAuthClientData(code: string) {
    const authClient = this.getAuthClient();
    
    // Обмін коду на токени
    const { tokens } = await authClient.getToken(code);
    authClient.setCredentials(tokens);

    // Отримання даних користувача
    const oauth2 = google.oauth2({ version: 'v2', auth: authClient });
    const userInfo = await oauth2.userinfo.get();

    return {
      email: userInfo.data.email,
      firstName: userInfo.data.given_name,
      lastName: userInfo.data.family_name,
      picture: userInfo.data.picture,
      refreshToken: tokens.refresh_token,
      accessToken: tokens.access_token,
    };
  }
}