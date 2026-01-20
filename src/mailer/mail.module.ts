import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule, 
    MailerModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com', // Для Gmail краще вказати явно або через env
          port: 587,
          secure: false, // true для 465, false для інших портів
          auth: {
            user: configService.get<string>('EMAIL_SERVER_EMAIL'),
            pass: configService.get<string>('EMAIL_SERVER_PASS'),
          },
        },
        defaults: {
          from: '"No Reply" <techmailer2026@gmail.com>',
        },
        template: {
          // __dirname вказує на папку dist після компіляції
          dir: join(process.cwd(), 'src/mail/templates'), 
          adapter: new HandlebarsAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
  ],

})
export class MailModule {} 