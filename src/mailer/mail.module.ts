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
          host: 'smtp.gmail.com', 
          port: 587,
          secure: false, 
          auth: {
            user: configService.get<string>('EMAIL_SERVER_EMAIL'),
            pass: configService.get<string>('EMAIL_SERVER_PASS'),
          },
        },
        defaults: {
          from: '"No Reply" <techmailer2026@gmail.com>',
        },
        template: {
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