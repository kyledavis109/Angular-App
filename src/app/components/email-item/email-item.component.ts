import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators }  from '@angular/forms';
import { Subscription } from 'rxjs';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-email-item',
  templateUrl: './email-item.component.html',
  styleUrls: ['./email-item.component.css']
})
export class EmailItemComponent implements OnInit {
  subscription!: Subscription;
  nodeMailerForm!: FormGroup;

  constructor(private body: MessageService) { 
    this.subscription = this.body.sendEmail(body).subscribe();
  }

  ngOnInit(): void {
  }

}
