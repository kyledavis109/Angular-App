import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  public subscription!: Subscription;
  nodeMailerForm!: FormGroup;

  constructor(private send: MessageService, private fb: FormBuilder) { 

  }

  infoForm = this.fb.group({
    name: ['', [
      Validators.required,
      Validators.minLength(3)
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]]
  });

  get name() { return this.infoForm.get('name'); }
  get email() { return this.infoForm.get('email'); }

  sendMail() {
    console.log(this.infoForm.value);
    this.subscription = this.send.sendEmail(this.infoForm.value).
    subscribe({
      next(data: any) {
        let msg = data['message'];
        alert(msg);
        console.log(data, "success");
      },
      error(error) {
        console.error(error, 'error');
      }
    });
  }

  ngOnInit(): void {
  }

}
