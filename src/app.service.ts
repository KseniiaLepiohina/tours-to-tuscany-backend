import { Injectable } from '@nestjs/common';
import { GoogleService } from './google/google.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AppService {

   constructor(private googleService: GoogleService,
    private jwtService:JwtService
    
   ) {}

    async googleAuth(): Promise<{ url: string }> {
    return this.googleService.getOAuth2ClientUrl();
  }

  async getAuthClientData(code: string) {
    const googleData = await this.googleService.getAuthClientData(code);

    const payload = { 
      email: googleData.email, 
      sub: googleData.email
    };

    const apiToken = this.jwtService.sign(payload);

    return {
      ...googleData,
      apiToken, 
    };
  }
}
