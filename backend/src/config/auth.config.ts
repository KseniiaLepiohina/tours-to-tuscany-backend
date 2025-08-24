import { ConfigModule, ConfigService } from '@nestjs/config';

export default () => ({
  authRequired: false,
  auth0Logout: true,
  secret: process.env.GOOGLE_CLIENT_SECRET,
  baseURL: 'http://localhost:3000',
  clientId: process.env.GOOGLE_CLIENT_ID,
});

