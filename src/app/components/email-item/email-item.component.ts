import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  nodeMailerForm!: FormGroup;
  showAddTask: boolean = true;
  public subscription!: Subscription;

  constructor(private send: MessageService, private fb: FormBuilder, private uiService: UiService) { 
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value));
  }

  infoForm = this.fb.group({
    emailAddress: ['', [
      Validators.required,
      Validators.email
    ]],
    emailSubject: ['', [
      Validators.required,
      Validators.minLength(1)
    ]],
    emailMessage: ['', [
      Validators.required,
      Validators.minLength(3)
    ]]
  });

  get emailAddress() { return this.infoForm.get('emailAddress') as FormControl; }
  get emailSubject() { return this.infoForm.get('emailSubject') as FormControl; }
  get emailMessage() { return this.infoForm.get('emailMessage') as FormControl;}

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
