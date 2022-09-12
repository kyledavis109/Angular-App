import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';


const nodemailer = require("nodemailer");
// require("dotenv").config();

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Angular App';
  username: any = environment.username;
  password: any = environment.password;
  clientid: any = environment.clientid;
  clientsecret:any = environment.clientsecret;
  refreshtoken: any = environment.refreshtoken;

  constructor() { }

  ngOnInit(): void {
  }

  // Main function for sending emails.
async main() {

  // Setup credentials to interact with nodemailer and Google API.
  let transport = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          type: 'OAuth2',
          user: this.username,
          pass: this.password,
          clientId: this.clientid,
          clientSecret: this.clientsecret,
          refreshToken: this.refreshtoken
      }
  });

  /* Specifies what email you want to send an email(s) from, who you want to send an email(s) to, the subject 
     of the email and the message you would like to send in the email(s). */
  let mailOptions = {
      from: 'Kyle Davis <kyledavis109@gmail.com>',
      to: 'kyledavis109@gmail.com',
      subject: 'Test',
      text: 'Hello!!!'
  };

  // Runs the sendmail method of nodemailer to send the email(s).
  transport.sendMail(mailOptions, (err: any, res: any) => {
      if (err) {
          console.log(err);
      } else {
          console.log('Email(s) sent successfully!');
      }
  });
  
};

// Runs the function to send the email(s).
// main().catch(console.error);

}
