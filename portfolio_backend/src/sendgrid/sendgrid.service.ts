import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor(private readonly configService: ConfigService) {
    // Don't forget this one.
    // The apiKey is required to authenticate our
    // request to SendGrid API.
    SendGrid.setApiKey(this.configService.get<string>('SEND_GRID_KEY'));
  }

  async send(mail: SendGrid.MailDataRequired) {
    const transport = await SendGrid.send(mail);
    // avoid this on production. use log instead :)
	console.log("transport = " + transport)
    console.log(`E-Mail sent to ${mail.to}`);
    return transport;
  }
}