import { Body, Controller, Post, Query } from '@nestjs/common';
import { SendgridService } from '../sendgrid/sendgrid.service';

@Controller('mail')
export class MailController {
	constructor(
		private readonly sendgridService: SendgridService
	) { }

	@Post('send-email')
	async sendEmail(@Body() payload) {

		const text = "name = " + payload.name + "\nmessage = \n" + payload.message;
		const mail = {
			to: 'sofia.hechaichi@gmail.com',
			subject: 'Portfolio contact form email',
			from: payload.email, // Fill it with your validated email on SendGrid account
			text: text,
		};

		return await this.sendgridService.send(mail);
	}
}
