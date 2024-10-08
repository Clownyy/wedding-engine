import { Module } from '@nestjs/common';
import { MailService } from './mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';

@Module({
	imports: [
		MailerModule.forRoot({
			transport: {
				host: process.env.MAIL_HOST,
				secure: false,
				auth: {
					user: process.env.MAIL_USER,
					pass: process.env.MAIL_PASSWORD,
				},
			},
			defaults: {
				from: `"Vitation " <${process.env.MAIL_FROM}>`,
			},
			template: {
				dir: join(__dirname, 'templates'),
				adapter: new HandlebarsAdapter(),
				options: {
					strict: true,
				}
			}
		})
	],
	providers: [MailService],
	exports: [MailService]
})
export class MailModule { }
